Feature: webtrends application tests for login

  @check @1
  Scenario Outline: Multiple beta user login

    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should see username logged in <username>
    And Logout from application 
    Examples:
      | email                                  | password       | type  |username        |    
      | pubeta@webtrends-optimize.com          | Webtrends@123  |       |Power Beta      |
      | betamulti@webtrends-optimize.com       | Webtrends@123  |       |Beta Multi      |
      | betasingle@webtrends-optimize.com      | Webtrends@123  |       |Beta Single     |
      | betamfa@webtrends-optimize.com         | Webtrends@123  |       |Beta MFA        |

@check @1
  Scenario Outline: Multiple non beta user login
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should see username logged in <username>
    And Logout from application 
    Examples:
      | email                                  | password       | type  |username        |
      | pu@webtrends-optimize.com              | Webtrends@123  |       |Power Nonbeta   |
      | multi@webtrends-optimize.com           | Webtrends@123  |       |Multi Nonbeta   |
      | single@webtrends-optimize.com          | Webtrends@123  |       |Single Non beta |
      | mfa@webtrends-optimize.com             | Webtrends@123  |       |MFA Non beta    |


@check @1
  Scenario Outline: Forget password request
    Given I am on the webtrends website home page
    When I check for forgetpassword <email>
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


Scenario Outline: Check for MFA login page
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    And I should see the verification code 
       Examples:
      | email                                  | password       | type  |   
      | richardeames123+mfa@gmail.com          |Corona2024!     |       |

@check @1
Scenario Outline: As a Power non beta user I navigate to different menu options and verify with Page headline
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    And I check dashboard page contents
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
      | email                         | password       | type  |username      |  account     |
      | pu@webtrends-optimize.com     | Webtrends@123  |       |Power Nonbeta | 7slots       |