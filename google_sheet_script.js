function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Thời Gian Gửi",
        "Họ và Tên",
        "Lời Chúc",
        "Xác Nhận Tham Dự",
        "Người Đi Cùng",
        "Khách Của Ai",
      ]);

      sheet
        .getRange(1, 1, 1, 6)
        .setFontWeight("bold")
        .setBackground("#e2e8f0")
        .setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else {
      data = e.parameter || {};
    }

    var timestamp = Utilities.formatDate(
      new Date(),
      "GMT+7",
      "dd/MM/yyyy HH:mm:ss",
    );
    var name = data.name || "";
    var wishes = data.wishes || "";
    var attendance = data.attendance || "";
    var plusOne = data.plus_one || data.plusOne || "Không có";
    // var guestOf = data.guest_of || data.guestOf || "";

    sheet.appendRow([
      timestamp,
      name,
      wishes,
      attendance,
      plusOne,
      // guestOf
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Đã lưu thành công vào Google Sheet",
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: error.toString(),
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var values = sheet.getDataRange().getValues();
    var wishes = [];

    for (var i = values.length - 1; i > 0; i--) {
      var name = values[i][1];
      var message = values[i][2];

      if (name && message) {
        wishes.push({
          name: String(name),
          wishes: String(message),
          timestamp: formatWishTimestamp_(values[i][0]),
        });
      }
    }

    var output = JSON.stringify(wishes);
    var callback = e && e.parameter ? e.parameter.callback : "";

    if (callback && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(callback)) {
      output = callback + "(" + output + ")";
      return ContentService.createTextOutput(output)
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }

    return ContentService.createTextOutput(output)
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify([]))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function formatWishTimestamp_(value) {
  if (!value) return "";

  if (Object.prototype.toString.call(value) === "[object Date]") {
    return Utilities.formatDate(value, "GMT+7", "HH:mm:ss d/M/yyyy");
  }

  var text = String(value);
  var match = text.match(/^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}:\d{2}:\d{2})$/);

  if (match) {
    return match[4] + " " + Number(match[1]) + "/" + Number(match[2]) + "/" + match[3];
  }

  return text;
}
