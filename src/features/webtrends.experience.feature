Feature: webtrends application tests for Experience Screen

Feature: Navigate to Experiences Page
  @experiences
  Scenario: User clicks Experiences tab from Dashboard

    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should check switch account <account>
    When I click the Experiences tab
    Then I should see the Experiences page
    
    When I check the "Live" tab and its statuses
    When I check the "Paused" tab and its statuses
    When I check the "Pending" tab and its statuses
    When I check the "Staging" tab and its statuses
    When I check the "Published" tab and its statuses
    When I check the "Archived" tab and its statuses
    When I click the "All" tab
    Then I should see tests with all statuses displayed


    Examples:
      | email                            | password       | type  |username      |  account         |  
      | pubeta@webtrends-optimize.com    | Webtrends@111  |       |Power Beta    | Test Automation  | 







  @ESearch
    Scenario Outline: As a Webtrends user I check for dashboard experience overview
    
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should check switch account <account>
    Then I click on Experience tab
    Then I enter a valid data and verify with Experience names
    Then I enter a invalid data and verify with message
    Then I enter a valid data but in upper/lower and verify with Experience names
    Then I enter special charactors and verify with message     
    And Logout from application 

    Examples:
      | email                         | password       | type  |username      |  account         |  
      | pu@webtrends-optimize.com     | Webtrends@123  |       |Power Nonbeta | Test Automation  |



  
 
