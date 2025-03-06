function skillsMember() {
  // Get the active sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var sheetName = sheet.getName();
  var sheetId = sheet.getSheetId();
  var sheetUrl = sheet.getSheetUrl();
  var sheetParent = sheet.getParent();
  var sheetParentName = sheetParent.getName();
  var sheetParentUrl = sheetParent.getUrl();
  var sheetParentFolder = sheetParent.getParent();
  var sheetParentFolderName = sheetParentFolder.getName();
  var sheetParentFolderUrl = sheetParentFolder.getUrl();
  var sheetParentFolderOwner = sheetParentFolder.getOwner();
  var sheetParentFolderOwnerName = sheetParentFolderOwner.getName();
  var sheetParentFolderOwnerEmail = sheetParentFolderOwner.getEmail