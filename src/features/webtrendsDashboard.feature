    Feature: webtrends application tests for Dashboard page

    @Dashboard
    Scenario Outline: As a customer user I check for dashboard experience overview
    
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    Then I should check switch account <account>
    And I check for dashboard experience overview
    And Logout from application 

    Examples:
      | email                         | password       | type  |username      |  account     |  
      | pu@webtrends-optimize.com     | Webtrends@123  |       |Power Nonbeta | Test Automation  |

    @Dashboard
    Scenario Outline: As a customer user I check for dashboard experience overview
    
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    And I check for dashboard Session usage
    And Logout from application 

    Examples:
      | email                             | password       | type  |username        |  
      | pubeta@webtrends-optimize.com     | Webtrends@123  |       |Power Beta      |

    @Dashboard
    Scenario Outline: As a customer user I check for dashboard experience overview
    
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    And I check for dashboard promotions
    And Logout from application 

    Examples:
      | email                             | password       | type  |username        |  
      | pubeta@webtrends-optimize.com     | Webtrends@123  |       |Power Beta      |

    @Dashboard
    Scenario Outline: As a customer user I check for dashboard experience overview
    
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    And I check for dashboard experience chart
    And Logout from application 

    Examples:
      | email                             | password       | type  |username        |  
      | pubeta@webtrends-optimize.com     | Webtrends@123  |       |Power Beta      |

    @Dashboard
    Scenario Outline: As a customer user I check for dashboard experience overview
    
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    And I check for dashboard report
    And Logout from application 

    Examples:
      | email                             | password       | type  |username        |  
      | pubeta@webtrends-optimize.com     | Webtrends@123  |       |Power Beta      |

    
    Scenario Outline: As a customer user I check for dashboard experience overview
    
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    And I check for edit experience
    And Logout from application 

    Examples:
      | email                             | password       | type  |username        |  
      | pubeta@webtrends-optimize.com     | Webtrends@123  |       |Power Beta      |
      
    @Dashboard
    Scenario Outline: As a customer user I check for dashboard experience overview
    
    Given I am on the webtrends website home page
    When I login with webtrends <email>, <password>, <type>
    And I check for label
    And Logout from application 

    Examples:
      | email                             | password       | type  |username        |  
      | pubeta@webtrends-optimize.com     | Webtrends@123  |       |Power Beta      |