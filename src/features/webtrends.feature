Feature: webtrends application tests for login

  Scenario Outline: As a customer user I can log into the webtrends application

    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should see username logged in <username>
    And Logout from application 
    Examples:
      | email                                  | password    | type  |username        |
      | louvina.barbosa@webtrends-optimize.com | Lo15BA07!!  | sso   |Louvina Barbosa |

   @test
  Scenario Outline: As a invalid user I can't log into the webtrends application
  
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should not able to login
    Examples:
      | email                                  | password    | type  |
      | louvina.barbosa@webtrends-optimize.com | Lo15BA07!!  |       |


  Scenario Outline: Multiple user login

    Given I launch the URL
    When I login with webtrends <email>, <password>, <type>
    Then I should see username logged in <username>
    And Logout from application 
    Examples:
      | email                                  | password    | type  |username        |
      | louvina.barbosa@webtrends-optimize.com | Lo15BA07!!  | sso   |Louvina Barbosa |  
      | louvina.barbosa@webtrends-optimize.com | Lo15BA07!!  | sso   |Louvina Barbosa |  