/**
 * Son Running – Newsletter Registration Handler
 *
 * Deploy this script as a Google Apps Script Web App:
 *   1. Go to https://script.google.com and create a new project.
 *   2. Replace the contents with this file.
 *   3. Click Deploy → New deployment → Web app.
 *   4. Set "Execute as" to "Me" and "Who has access" to "Anyone".
 *   5. Copy the Web App URL.
 *   6. In index.html, replace the NEWSLETTER_ENDPOINT value with the copied URL.
 *
 * The spreadsheet should have a sheet (or will use the first/active sheet)
 * with columns: Timestamp | Tên | Email
 *
 * Note: The Spreadsheet ID below matches the publicly shared spreadsheet URL
 * (https://docs.google.com/spreadsheets/d/1jS_kmtZXY7fd8b-Qv6LyXhKBvqcMxhCsUxKo-COVWAU).
 * Ensure the sheet's sharing settings are set appropriately ("Anyone with the link
 * can view" is sufficient; write access is controlled by the script owner's credentials).
 */

var SPREADSHEET_ID = '1jS_kmtZXY7fd8b-Qv6LyXhKBvqcMxhCsUxKo-COVWAU';

function doPost(e) {
  try {
    var name  = (e.parameter.name  || '').trim();
    var email = (e.parameter.email || '').trim();

    if (!name || !email) {
      return jsonResponse({ success: false, error: 'Vui lòng điền đầy đủ tên và email.' });
    }

    // Server-side email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ success: false, error: 'Địa chỉ email không hợp lệ.' });
    }

    var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    sheet.appendRow([new Date(), name, email]);
    return jsonResponse({ success: true });
  } catch (err) {
    return jsonResponse({ success: false, error: err.toString() });
  }
}

function doGet() {
  return jsonResponse({ status: 'ok' });
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
