const WEDDING_CONFIG = {
  theme: "green",

  groom: {
    name: "Đình Huy",
    fullName: "Đào Đình Huy",
    parents: {
      father: "Ông. Đào Đình Ngọc",
      mother: "Bà. Nguyễn Thị Hà",
    },
  },
  bride: {
    name: "Diệu Linh",
    fullName: "Bùi Diệu Lih",
    parents: {
      father: "Ông. Bùi Mạnh Thắng",
      mother: "Bà. Nguyễn Thị Thu Hằng",
    },
  },

  weddingDate: "2026-11-29T14:00:00",
  dateDisplay: {
    day: "29",
    month: "11",
    year: "2026",
    shortYear: "26",
    fullDateText: "17:00 | THỨ BẢY | 29.11.2026",
  },

  venueBride: {
    name: "TƯ GIA NHÀ GÁI",
    address: "Thôn Trà Hương - Xã Kiến Xương - Tỉnh Hà Nội",
    time: "17:00 | THỨ BẢY | 28.11.2026",
    mapUrl: "ttps://maps.app.goo.gl/DFPSaRstR3q2vNdG6",
  },

  venueGroom: {
    name: "TƯ GIA NHÀ TRAI",
    address: "Thôn Văn Hàn - Xã Thái Ninh - Tỉnh Hưng Yên",
    time: "10:00 | CHỦ NHẬT | 29.11.2026",
    mapUrl: "https://maps.app.goo.gl/DFPSaRstR3q2vNdG6",
  },

  venue: {
    name: "TẠI TƯ GIA NHÀ TRAI",
    address: "Thôn Văn Hàn - Xã Thái Ninh - Tỉnh Hưng Yên",
    mapUrl: "https://maps.app.goo.gl/DFPSaRstR3q2vNdG6",
  },

  timeline: [
    { time: "09:00", title: "ĐÓN TIẾP KHÁCH MỜI", icon: "camera" },

    { time: "10:00", title: "CHUNG VUI KHAI TIỆC", icon: "dining" },
    { time: "11:30", title: "THƯỞNG THỨC TIỆC NGỌT, ÂM NHẠC", icon: "music" },
  ],

  images: {
    hero: "assets/root_images/HNH03015.jpg",
    saveDate6: "assets/root_images/HNH02786.jpg",
    saveDate1: "assets/root_images/DRN00773.jpg",
    saveDate2: "assets/root_images/HNH03555.jpg",
    saveDate3: "assets/root_images/HNH03675.jpg",
    saveDate4: "assets/root_images/DRN00570.jpg",
    saveDate5: "assets/root_images/HNH03428.jpg", // DRN00773 // HNH03428
    saveDate7: "assets/root_images/HNH02590.jpg",
    saveDate8: "assets/root_images/HNH02718.jpg",
    // saveDate9: 'assets/root_images/HNH02915.JPG',
    coupleGroom: "assets/root_images/HNH03545.jpg",
    coupleBride: "assets/root_images/HNH03430.jpg",
    storyBanner: "assets/root_images/HNH03680.JPG",
    thankYou: "assets/root_images/DRN00563.JPG",
    gallery: [
      "assets/root_images/HNH00913.JPG",
      "assets/root_images/HNH00317.JPG",
      "assets/root_images/HNH00037.JPG",
      "assets/root_images/HNH00222.JPG",
      "assets/root_images/HNH00013.JPG",
      // 'assets/root_images/HNH03619.JPG',
      // 'assets/root_images/HNH03428.jpg',
      // 'assets/root_images/HNH03545.jpg',
      // 'assets/root_images/HNH03792.jpg',
      // 'assets/root_images/HNH02590.jpg'
    ],
  },

  music: {
    enable: true,
    audioSrc: "assets/audio/wedding-song.mp3",
  },

  giftBox: {
    enable: true,
    groomBank: {
      bankName: "MB Bank",
      accountNumber: "686825122001",
      accountName: "DAO DINH HUY",
      qrImage: "assets/root_images/BANKQR.JPG",
    },
  },

  rsvp: {
    googleSheetScriptUrl:
      "https://script.google.com/macros/s/AKfycbxSukXREIyfM6S_RH-PkMPpDHPuXRQnI9olYTn54rsw2WvX0YUoRLQC8oRu5T4q_oMvWQ/exec",
  },

  sakura: {
    enable: true,
    petalCount: "auto",
    windSpeed: 1.7,
    fallSpeed: 2.1,
    interactive: true,
  },
};
