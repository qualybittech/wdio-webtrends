  Feature: webtrends application tests for Dashboard page

  @Dashboard
    Scenario Outline: As a Webtrends Nonbeta-user Iam checking On dashboard screen Experience overview tabs, Experience Launched Chart and Labels
    
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should check switch account <account>
    And I check for dashboard experience overview
    And I check for dashboard experience chart
    Then I check for dashboard session usage
    And I check for dashboard promotions
    And I check for label
    And Logout from application 

    Examples:
      | email                         | password       | type  |username      |  account         |  
      | pubeta@webtrends-optimize.com | Webtrends@111  |       |Power Beta    | Test Automation  |
 
 @session
  Scenario: As a Webtrends user, I click on the Session Usage Link and verify the FAQ page
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should check switch account <account>
    Then I check for dashboard session usage
    
    And Logout from application

  Examples:
    | email                         | password       | type  | username      | account         |
    | pu@webtrends-optimize.com     | Webtrends@111  |       | Power Nonbeta | Test Automation |

 
@chart
    Scenario Outline: As a user I check for dashboard experience chart
    
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should check switch account <account>

    And I check for dashboard experience chart

    Examples:
      | email                         | password       | type  |username      |  account         |  
      | pu@webtrends-optimize.com     | Webtrends@111  |       |Power Nonbeta | Test Automation  | 
  
@marketingbanner
Scenario: As a Webtrends user, I click on the promotional banner Link and verify the Marketing banner page
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
  #Then I should check switch account <account>
    And I check for dashboard promotions
      

  Examples:
      | email                             | password       | type  |username        |  
      | pubeta@webtrends-optimize.com     | Webtrends@111  |       |Power Beta      |
      
 
 @LiveExperiencesLive
 Scenario: As a Webtrends user, I click on the "View Full Report" CTA and verify Experince name with Report screen
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should check switch account <account>
    Then I check for Liveexperiences
    #And Logout from application
     

  Examples:
    | email                         | password       | type  | username      | account         |
    | pu@webtrends-optimize.com     | Webtrends@111  | admin | Power Nonbeta | Addiko Bank     |


 
@LiveExperiencesD1
  Scenario: As a Webtrends user, I click on the "View Full Report" CTA and verify Experince name with Report screen
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should check switch account <account>
    Then I check for Liveexperiences
    And Logout from application
     
  Examples:
    | email                         | password       | type  | username      | account         |
    | pu@webtrends-optimize.com     | Webtrends@111  | admin | Power Nonbeta | Test Automation |

@labels
    Scenario Outline: As a customer user check for label 
    
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should check switch account <account>
    And I check for label

    Examples:
      | email                             | password       | type  |username      |  account         |  
      | pubeta@webtrends-optimize.com     | Webtrends@111  |       |Power Beta    | Test Automation  |








# Please tick experience overview check box, when running the test again
@editdashboard
    Scenario Outline: As a user I edit the Dashboard

    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should check switch account <account>
    And I check for editDashboard

    Examples:
      | email                             | password       | type  |username      |  account         |  
      | pubeta@webtrends-optimize.com     | Webtrends@111  |       |Power Beta    | Test Automation  |
  
  
  
  @editexperience 
    Scenario Outline: As a user I check for dashboard experience overview
    
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should check switch account <account>
    And I check for edit experience

    Examples:
      | email                                | password       | type  |username      |  account         |  
      | betamulti@webtrends-optimize.com     | Webtrends@111  |       |Beta Multi    | Test Automation  |

  @editexperiencelive
    Scenario Outline: As a user I check for dashboard experience overview
    
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should check switch account <account>
    And I check for edit experience

    Examples:
      | email                                | password       | type  |username      |  account         |  
      | betamulti@webtrends-optimize.com     | Webtrends@111  |       |Beta Multi    | Optimize UI      |


