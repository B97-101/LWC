public with sharing class AccountController {
    // Creating a method to get the list of account
    // This method will have a parameter that will hold the search word
    // filter : This parameter will hold the search word
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String filter){
        // looking for the result that contains filter keyword
        String keyNameString = '%' + filter +'%'; 
        // Returns the list of Account who name contains the entered keyword
        List<Account> accountList = [SELECT Id, Name, Phone FROM Account WHERE Name LIKE :keyNameString];
        // return the account list
        return accountList;
    }
}
