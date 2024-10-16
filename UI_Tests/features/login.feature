Feature: The Internet Guinea Pig Website
 
  @sampletag
  Scenario Outline: As a user, I can log into BGE
    Given User am on the login page
    When User clicks in Sign In button
    When User login with <userType> credentials and click Continue button
    When User clicks Remind me later button

    Examples:
      | userType  | message                        |
      | validUser | You logged into a secure area! |
# | invalidUser | Your username is invalid!      |





