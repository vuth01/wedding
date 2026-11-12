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
    fullName: "Bùi Diệu Linh",
    parents: {
      father: "Ông. Bùi Mạnh Thắng",
      mother: "Bà. Nguyễn Thị Thu Hằng",
    },
  },

  weddingDate: "2026-11-29T09:45:00",
  dateDisplay: {
    day: "29",
    month: "11",
    year: "2026",
    shortYear: "26",
    fullDateText: "17:00 | CHỦ NHẬT | 29.11.2026",
  },

  venueBride: {
    name: "TƯ GIA NHÀ GÁI",
    address: "Nhà văn hoá Khu Chợ Nam Cương - Xã Nội Bài - TP. Hà Nội",
    time: "15:15 | THỨ BẢY | 28.11.2026",
    mapUrl: "https://maps.app.goo.gl/Z3Hw8at2QHHgUK1p8",
  },

  venueGroom: {
    name: "TƯ GIA NHÀ TRAI",
    address: "Thôn Văn Hàn - Xã Thái Ninh - Tỉnh Hưng Yên",
    time: "09:45 | CHỦ NHẬT | 29.11.2026",
    mapUrl: "https://maps.app.goo.gl/DFPSaRstR3q2vNdG6",
  },

  venue: {
    name: "TẠI TƯ GIA NHÀ TRAI",
    address: "Thôn Văn Hàn - Xã Thái Ninh - Tỉnh Hưng Yên",
    mapUrl: "https://maps.app.goo.gl/DFPSaRstR3q2vNdG6",
  },

  timeline: [
    { time: "09:30", title: "ĐÓN TIẾP KHÁCH MỜI", icon: "camera" },

    { time: "09:45", title: "LỄ THÀNH HÔN", icon: "ring" },
    { time: "10:15", title: "KHAI TIỆC", icon: "dining" },
  ],

  images: {
    hero: "assets/root_images/DSC03627.webp", // DSC03451
    saveDate6: "assets/root_images/DSC04905.webp",
    saveDate1: "assets/root_images/DSC03637.webp",
    saveDate2: "assets/root_images/DSC03793.webp",
    saveDate3: "assets/root_images/DSC03853.webp",
    saveDate7: "assets/root_images/DSC04377.webp",
    saveDate8: "assets/root_images/DSC04969.webp",
    // saveDate9: 'assets/root_images/HNH02915.JPG',
    coupleGroom: "assets/root_images/DSC03895.webp", // DSC04998
    coupleBride: "assets/root_images/DSC03895.webp", // DSC04637
    storyBanner: "assets/root_images/HNH03680.jpg",
    thankYou: "assets/root_images/DSC03910.webp",
    gallery: [
      "assets/root_images/DSC04693.webp",
      "assets/root_images/DSC04708.webp",
      "assets/root_images/DSC04073.webp",
      "assets/root_images/DSC04734.webp", //DSC04998
      "assets/root_images/DSC04207.webp",
      // 'assets/root_images/HNH03619.JPG',
      // 'assets/root_images/HNH03428.webp',
      // 'assets/root_images/HNH03545.jpg',
      // 'assets/root_images/HNH03792.jpg',
      // 'assets/root_images/HNH02590.webp'
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
      qrImage: "assets/root_images/BANKQR.png",
    },
  },

  rsvp: {
    googleSheetScriptUrl:
      "https://script.google.com/macros/s/AKfycbzP_7k62b6yCz4432TxuOTSZUk9Etjp79wOol4oeDgCsJOKjncLuoOvlG0DSlAnnEMw6A/exec",
  },

  sakura: {
    enable: true,
    petalCount: "auto",
    windSpeed: 1.7,
    fallSpeed: 2.1,
    interactive: true,
  },
};
