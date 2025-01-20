Feature: webtrends application tests for login

  Scenario Outline: As a customer user I can log into the webtrends application

    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should see username logged in <username>
    And Logout from application 
    Examples:
      | email                                  | password    | type  |username        |
      | louvina.barbosa@webtrends-optimize.com | Lo15BA07!!  | sso   |Louvina Barbosa |

  Scenario Outline: As a invalid user I can't log into the webtrends application
  
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should not be able to login
    Examples:
      | email                                  | password    | type  |
      | louvina.barbosa@webtrends-optimize.com | Lo15BA07!!  |       |

  
  Scenario Outline: Multiple user login

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
      | pu@webtrends-optimize.com              | Webtrends@123  |       |Power Nonbeta   |
      | multi@webtrends-optimize.com           | Webtrends@123  |       |Multi Nonbeta   |
      | single@webtrends-optimize.com          | Webtrends@123  |       |Single Non beta |
      | mfa@webtrends-optimize.com             | Webtrends@123  |       |MFA Non Beta    |


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
      
  

# Scenario Outline: for resetting password through outlook

# Scenario Outline: Successful login with MFA 

#   Given I am on the webtrends website home page
#   Given I am on the webtrends website home page
#   When I login with webtrends <email>, <password>  
#   When I click on the "Login" button 
#    Then I should be prompted to enter a verification code  
#    When I enter the valid verification code "123456"  
#    And I click on the "Verify" button  
#    Then I should be redirected to my account dashboard  
#    And I should see a message "Login successful"
#    Examples:
#    | email                                  | password    |
#    |                                        |             |

#  Scenario Outline: Login with expired password

#    Given I enter my webtrends email "<email>" and expired password "<password>"  
#    When I click on the "Login" button 
#    Then I should see a message "Your password has expired. Please change your password."  
#   And I should be redirected to the "Change Password" page

 @test
  Scenario Outline: As a customer user I can log into the webtrends application

    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    And I check dashboard page contents
    Then I click create menu and verify
    And I click experiences menu and verify
    And I click configure menu page and verify
    And Logout from application 
    Examples:
      | email                                  | password       | type  |username        |
      | louvina.barbosa@webtrends-optimize.com | Lo15BA07!!   | sso   |Louvina Barbosa |