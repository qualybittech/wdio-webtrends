Feature: webtrends application tests for login


@betalogin
  Scenario Outline: Multiple beta user login

    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should see username logged in <username>
    And Logout from application 
    Examples:
      | email                                  | password       | type  |username        |    
      | pubeta@webtrends-optimize.com          | Webtrends@111  |       |Power Beta      |
      | betamulti@webtrends-optimize.com       | Webtrends@111  |       |Beta Multi      |
      | betasingle@webtrends-optimize.com      | Webtrends@111  |       |Beta Single     |
      | betamfa@webtrends-optimize.com         | Webtrends@111  |       |Beta MFA        |

@nonbetalogin
  Scenario Outline: Multiple non beta user login
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should see username logged in <username>
    And Logout from application 
    Examples:
      | email                                  | password       | type  |username        |
      | pu@webtrends-optimize.com              | Webtrends@111  |       |Power Nonbeta   |
      | multi@webtrends-optimize.com           | Webtrends@111  |       |Multi Nonbeta   |
      | single@webtrends-optimize.com          | Webtrends@111  |       |Single Non beta |
      | mfa@webtrends-optimize.com             | Webtrends@111  |       |MFA Non Beta    |  

# only for d1
@mfad1 
  Scenario Outline: MFA
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    #And I should see the verification code 
       Examples:
      | email                                  | password       | type  |   
      | richardeames123+mfa@gmail.com          | Webtrends@111  |       |      

@sso
  Scenario: Check for SSO login page
    Given I am on the webtrends website home page
    When I click on Sign in with SSO

@invalidlogin
  Scenario Outline: As a invalid user I can't log into the webtrends application
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
   #Then I should not be able to login
    Examples:
      | email                                      | password       | type  |
      | pu@webtrends-optimize.com                  | Webtrends@111  |       |    

 @forgotpassword
  Scenario Outline: Forget password request
    Given I am on the webtrends website home page
    When I click on the Forgot password link
    And I will enter my email address <email>
    And I will click on the Request reset link
    Then I should see a confirmation message for the reset link
    
    Examples:
      | email                                  | 
      | louvina.barbosa@webtrends-optimize.com | 
      | pubeta@webtrends-optimize.com          | 
      | betamulti@webtrends-optimize.com       |
      | betasingle@webtrends-optimize.com      |
      | betamfa@webtrends-optimize.com         | 
      | pu@webtrends-optimize.com              | 
      | multi@webtrends-optimize.com           | 
      | single@webtrends-optimize.com          | 
      | mfa@webtrends-optimize.com             |


# For live site change account to 7slots

@navigation
Scenario Outline: As a Power non beta user I navigate to different menu options and verify with Page headline
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
  #  And I check dashboard page contents
    Then I should check for Logo navigation
    Then I should check for Dashboard navigation
    Then I click create menu and verify
    And I click experiences menu and verify
    And I click configure menu page and verify
    And I check for navigation of help and verify
    Then I should check switch account <account>
    Then I check for navigation of my account options
    And Logout from application
    
    Examples:
      | email                             | password       | type  |username      |  account              |
      | pubeta@webtrends-optimize.com     | Webtrends@111  |       |Power Beta   | Test Automation       |