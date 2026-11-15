/* ------------------------------------------------------------------
 * SAMPLE TEMPLATE — Emerald Green Royal
 * Ye SAMPLE data hai (Ahmed Raza & Ayesha Khan). Asli client ke liye
 * SIRF isi file me naam, tareekh aur venue badlein — bas.
 * Saari details SIRF isi file me hain.
 * ------------------------------------------------------------------ */

export interface TimelineEvent {
  day: string;
  time: string;
  title: string;
  urdu: string;
  note: string;
  noteUrdu: string;
}

export interface Venue {
  tag: string;
  tagUrdu: string;
  name: string;
  nameUrdu: string;
  address: string;
  addressUrdu: string;
  mapQuery: string;
  mapUrl: string;
}

export interface RsvpContact {
  name: string;
  phone: string;
}

export const wedding = {
  groom: "Ahmed Raza",
  groomUrdu: "احمد رضا",
  groomFamily: "",
  groomFamilyUrdu: "",
  bride: "Ayesha Khan",
  brideUrdu: "عائشہ خان",
  brideFamily: "",
  brideFamilyUrdu: "",

  heroIntro: "Together with their families\nrequest the honour of your presence",
  heroIntroUrdu: "اپنے اہل خانہ کے ساتھ\nآپ کی تشریف آوری کے خواستگار ہیں",

  welcome:
    "Two souls, one beautiful journey.\nJoin us as we begin our forever —\nwith your love, laughter and precious duas.",
  welcomeUrdu:
    "دو دل، ایک خوبصورت سفر۔\nہماری نئی زندگی کے آغاز میں\nاپنی محبتوں اور دعاؤں کے ساتھ شریک ہوں۔",

  // Scratch-to-reveal heart
  dateText: "20 – 21 February 2027",
  day: "Saturday & Sunday",
  time: "Mehndi 6 PM · Shalima 1 PM",

  // Punctuality note — Program Timeline section ke neeche
  punctuality: "Kindly arrive on time — your punctuality helps us begin the celebrations promptly and enjoy every moment together. ♥",
  punctualityUrdu: "براہِ کرم وقت پر تشریف لائیں — آپ کی پابندیِ وقت سے تقریب بروقت شروع ہوگی اور ہم سب مل کر ہر لمحہ لطف اٹھا سکیں گے۔ ♥",

  // Countdown + Save-the-date target (pehli taqreeb — Mehndi)
  date: "2027-02-20T18:00:00+05:00",
  venue: "Emerald Palace Hall",
  address: "Mehndi Venue",

  timeline: [
    {
      day: "Saturday, 20 February 2027",
      time: "6:00 PM",
      title: "Mehndi",
      urdu: "مہندی",
      note: "",
      noteUrdu: "",
    },
    {
      day: "Sunday, 21 February 2027",
      time: "1:00 PM",
      title: "Shalima",
      urdu: "شالیمہ",
      note: "",
      noteUrdu: "",
    },
  ] as TimelineEvent[],

  venues: [
    {
      tag: "Mehndi",
      tagUrdu: "مہندی",
      name: "Emerald Palace Hall",
      nameUrdu: "ایمرلڈ پیلس ہال",
      address: "Saturday, 20 February 2027 · 6:00 PM onwards",
      addressUrdu: "ہفتہ، 20 فروری 2027 · شام 6 بجے سے",
      mapQuery: "Emerald Palace Hall",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Emerald+Palace+Hall",
    },
    {
      tag: "Shalima",
      tagUrdu: "شالیمہ",
      name: "Royal Garden Marquee",
      nameUrdu: "رائل گارڈن مارکی",
      address: "Sunday, 21 February 2027 · 1:00 PM onwards",
      addressUrdu: "اتوار، 21 فروری 2027 · دوپہر 1 بجے سے",
      mapQuery: "Royal Garden Marquee",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Royal+Garden+Marquee",
    },
  ] as Venue[],

  preEvents: [] as TimelineEvent[],

  transportation:
    "Ample parking is available at both venues. Guests travelling from out of town, please contact us and we will help arrange transport.",
  accommodation:
    "Out-of-town guests, please let us know in your RSVP and we will arrange comfortable accommodation near the venues.",
  gifts:
    "Your presence is the greatest gift. Should you wish to honour us with a gift, a contribution towards our new beginning would be warmly appreciated.",

  // RSVP rabta numbers — ASLI numbers yahan likhein
  rsvpContacts: [
    { name: "Ahmed's Family", phone: "+92 300 0000000" },
    { name: "Ayesha's Family", phone: "+92 300 0000000" },
  ] as RsvpContact[],

  lookingForward: "Ahmed Raza & Ayesha Khan",
  lookingForwardUrdu: "احمد رضا اور عائشہ خان",
};
