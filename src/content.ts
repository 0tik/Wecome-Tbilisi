export type Lang = "ka" | "en";

export interface Speaker {
  name: string;
  img: string;
}

export interface Content {
  nav: { lang: string };
  hero: {
    dates: string;
    address: string;
    venue: string;
  };
  mission: { text: string };
  facts: {
    title: string;
    supportersTitle: string;
    supporters: string[];
  };
  concept: {
    title: string;
    lead: string;
    side: string;
    spacesTitle: string;
    formatsLabel: string;
    formats: string[];
    experts: string;
    tickets: string;
    ticketLabel: string;
    stats: { value: number; suffix: string; label: string }[];
  };
  gala: {
    title: string;
    lead: string;
    invitedTitle: string;
    invited: string[];
    outro: string;
  };
  agenda: {
    title: string;
    lead: string;
    days: {
      num: string;
      date: string;
      theme: string;
      items: {
        time: string;
        title: string;
        subtitle?: string;
        note?: string;
        speakers?: { name: string; role: string }[];
      }[];
    }[];
  };
  unique: {
    kicker: string;
    title: string;
    pillars: string[];
    text: string;
  };
  modern: {
    title: string;
    display: string;
    text1: string;
    text2: string;
  };
  tourist: {
    title: string;
    intro: string;
    showcaseLabel: string;
    showcase: string[];
    expo: string;
    strategic: string;
    eduTitle: string;
    edu1: string;
    edu2: string;
  };
  film: {
    title: string;
    text1: string;
    text2: string;
  };
  gastro: {
    title: string;
    text1: string;
    text2: string;
  };
  forum: {
    title: string;
    subtitle: string;
    unites: string;
    goal: string;
  };
  partners: {
    title: string;
    lead: string;
    list: string[];
    outro: string;
  };
  economy: {
    title: string;
    lead: string;
    list: string[];
  };
  urban: {
    title: string;
    lead: string;
    listLead: string;
    list: string[];
  };
  business: {
    title: string;
    lead: string;
    list: string[];
  };
  speakers: {
    title: string;
  };
  finale: {
    thanks: string;
    dates: string;
  };
}

export const speakers: Speaker[] = [
  { name: "Patrick Mignano", img: "img/speakers/patrick-mignano.jpg" },
  { name: "Shani Orona", img: "img/speakers/shani-orona.jpg" },
  { name: "Michael J. Burmeister", img: "img/speakers/michael-burmeister.jpg" },
  { name: "Glenn Gainor", img: "img/speakers/glenn-gainor.jpg" },
  { name: "Gia Noortas", img: "img/speakers/gia-noortas.jpg" },
  { name: "Yan Fisher-Romanovsky", img: "img/speakers/yan-fisher.jpg" },
  { name: "Eran Ketter", img: "img/speakers/eran-ketter.jpg" },
  { name: "Rick Steves", img: "img/speakers/rick-steves.jpg" },
  { name: "Mory Sacko", img: "img/speakers/mory-sacko.jpg" },
  { name: "Shahar Stroh", img: "img/speakers/shahar-stroh.jpg" },
];

const ka: Content = {
  nav: { lang: "EN" },
  hero: {
    dates: "23-24-25 ოქტომბერი, 2026",
    address: "თავისუფლების მოედანი 2",
    venue: "თბილისის საკრებულოს შენობა",
  },
  mission: {
    text: "ღონისძიების მიზანია თბილისის, როგორც <b>თანამედროვე</b>, <b>დინამიკური</b> და <b>საერთაშორისო</b> მასშტაბით კონკურენტუნარიანი ქალაქის პოზიციონირება. პროექტი წარმოაჩენს <b>დედაქალაქის პროგრესს</b> თანამედროვე არქიტექტურის, შემოქმედებითი ინდუსტრიების, კულტურის, ტურიზმისა და გასტრონომიის სფეროებში. ამასთან, იგი ხაზს უსვამს <b>თბილისის უნიკალურ უნარს</b> — ჰარმონიულად შეუხამოს ისტორიული მემკვიდრეობა თანამედროვე ურბანულ განვითარებას.",
  },
  facts: {
    title: "ღონისძიების მხარდამჭერები:",
    supportersTitle: "ღონისძიების მხარდამჭერები",
    supporters: [
      "ქალაქ თბილისის მერია",
      "სსიპ შემოქმედებითი საქართველო",
      "საქართველოს კულტურის სამინისტრო",
      "საქართველოს ტურიზმის ეროვნული ადმინისტრაცია",
      "NEXT",
    ],
  },
  concept: {
    title: "ღონისძიების კონცეფცია",
    lead: "სამი დღის განმავლობაში თბილისის საკრებულოს შენობა გადაიქცევა საერთაშორისო პლატფორმად, რომელიც ქალაქის თანამედროვე მიღწევებს, გამოცდილების გაზიარებასა და პროფესიულ თანამშრომლობას დაეთმობა.",
    side: "ეს სივრცე ერთად მოუყრის თავს საერთაშორისო სპიკერებს, ადგილობრივ წამყვან ექსპერტებსა და ბიზნესის, განათლების, და კერძო სექტორის წარმომადგენლებს.",
    spacesTitle: "ღონისძიება ერთდროულად სამ დამოუკიდებელ საკონფერენციო სივრცეში გაიმართება,",
    formatsLabel: "სადაც უწყვეტ რეჟიმში ჩატარდება:",
    formats: [
      "პანელური დისკუსიები",
      "თემატური ვორქშოფები",
      "პრაქტიკული ტრენინგები",
      "B2B შეხვედრები",
      "მასტერკლასები",
    ],
    experts: "სამი დღის განმავლობაში მონაწილეებს ექნებათ შესაძლებლობა, დაესწრონ საერთაშორისო დონის მოწვეული სპიკერების გამოსვლებს, ასევე გაეცნონ 50-ზე მეტი ქართველი დარგობრივი ექსპერტის გამოცდილებასა და პრაქტიკულ ცოდნას.",
    tickets: "ღონისძიებაზე დასწრება შესაძლებელია პლატფორმა TKT.GE-ზე ბილეთების შეძენით:",
    ticketLabel: "ბილეთების შეძენა",
    stats: [
      { value: 3, suffix: "", label: "დღე" },
      { value: 3, suffix: "", label: "საკონფერენციო სივრცე" },
      { value: 50, suffix: "+", label: "ქართველი ექსპერტი" },
    ],
  },
  gala: {
    title: "დასკვნითი ღონისძიება",
    lead: "ფორუმის ოფიციალური დახურვა აღინიშნება გალა ვახშმით, რომელიც გაიმართება განსაკუთრებულ, სადღესასწაულო ატმოსფეროში.",
    invitedTitle: "გალა საღამოზე მოწვეულნი იქნებიან:",
    invited: [
      "საერთაშორისო სპიკერები",
      "ქართველი დარგობრივი ექსპერტები",
      "პარტნიორი კომპანიებისა და ორგანიზაციების წარმომადგენლები",
      "ღონისძიების მხარდამჭერები და საპატიო სტუმრები",
    ],
    outro: "გალა ვახშამი იქნება სამი დღის წარმატებული თანამშრომლობის, ახალი პარტნიორული ურთიერთობების და მომავალი საერთაშორისო პროექტების დასაწყისის სიმბოლო, სადაც მონაწილეებს არაფორმალურ გარემოში ექნებათ ურთიერთობის, გამოცდილების გაზიარებისა და საქმიანი კავშირების გაღრმავების შესაძლებლობა.",
  },
  agenda: {
    title: "დღის წესრიგი",
    lead: "სამი დღე, სამი თემა — პანელური დისკუსიები ყოველდღე 12:00-დან.",
    days: [
      {
        num: "დღე 01",
        date: "23 ოქტომბერი",
        theme: "თანამედროვე თბილისი: შემდეგი თავი",
        items: [
          { time: "12:00", title: "ქალაქი როგორც ისტორია: რა ხდის თანამედროვე თბილისს უნიკალურს?" },
          { time: "13:30", title: "ლოკაციიდან დანიშნულების ადგილამდე: შეძლებს თუ არა კინო თბილისის გლობალურ რუკაზე დამკვიდრებას?" },
          { time: "15:00", title: "თბილისი — კინემატოგრაფისტების ქალაქი: რას ხედავს საერთაშორისო ინდუსტრია?" },
          { time: "16:30", title: "გლობალური ქალაქის მშენებლობა: როგორ მიიპყროს თბილისმა საერთაშორისო ყურადღება?" },
          { time: "18:00", title: "კრეატიულობა, კულტურა და ახალი თბილისი: ვინ აყალიბებს ქალაქს?" },
          { time: "19:30", title: "შემდეგი თავი: როგორი უნდა გახდეს თბილისი?", note: "დახურული სესია — მხოლოდ მოწვევით" },
        ],
      },
      {
        num: "დღე 02",
        date: "24 ოქტომბერი",
        theme: "თბილისი: მომავლისთვის შექმნილი",
        items: [
          { time: "12:00", title: "ვინ ქმნის ახალი თბილისის დიზაინს?", subtitle: "სადაც ტურიზმი, გასტრონომია და კრეატიულობა ქმნის ქალაქის ახალ თავს" },
          { time: "13:30", title: "არქიტექტურა როგორც დანიშნულების ადგილი: შეუძლია თუ არა დიზაინს შეცვალოს, როგორ ხედავს მსოფლიო თბილისს?", subtitle: "თბილისი ობიექტივში: არქიტექტურა როგორც აქტივი გლობალური კინოინდუსტრიისთვის" },
          { time: "15:00", title: "რას ხედავენ კინომწარმოებლები, რასაც დეველოპერები ვერ ამჩნევენ?" },
          { time: "16:30", title: "მემკვიდრეობა თუ მომავალი: როგორ უნდა განვითარდეს თბილისი?" },
          { time: "18:00", title: "პროექტიდან ადგილამდე: რა ხდის განაშენიანებას იკონურს?", note: "კურატორი — NEXT" },
          { time: "19:30", title: "შემდეგი თბილისის დიზაინი: როგორი უნდა იყოს ქალაქი 2035 წელს?", subtitle: "როგორი უნდა იყოს მომავლის თბილისი — ვიზუალურად, ფუნქციურად, შეგრძნებით?" },
        ],
      },
      {
        num: "დღე 03",
        date: "25 ოქტომბერი",
        theme: "თბილისი: ტურიზმი, გასტრონომია და კრეატიული ცხოვრების სტილი",
        items: [
          { time: "12:00", title: "ტურიზმის მიღმა: გამოცდილების შეთავაზება" },
          { time: "13:30", title: "ქართული სამზარეულოდან გლობალურ სამზარეულომდე", note: "დახურული მასტერკლასი საერთაშორისო სტუმრებისთვის — კურატორი Marriott" },
          { time: "15:00", title: "თბილისი ღამით: კულტურა, ღამის ცხოვრება და კრეატიული ეკონომიკა" },
          { time: "16:30", title: "ლოკალურიდან გლობალურამდე: გახდება თუ არა თბილისი კრეატიული ცხოვრების სტილის მიმართულება?" },
          { time: "18:00", title: "თბილისის გემო: გასტრონომია როგორც ქალაქის გლობალური ბრენდი", note: "დასწრება მხოლოდ VIP პასით" },
        ],
      },
    ],
  },
  unique: {
    kicker: "WELCOME TBILISI",
    title: "უნიკალური საერთაშორისო ღონისძიება",
    pillars: [
      "თბილისი — თანამედროვე ევროპული ქალაქი",
      "თბილისი — ამომავალი ტურისტული ქალაქი",
      "თბილისი — კულინარიული თავგადასავალი",
      "თბილისი — როგორც გადასაღები მოედანი",
    ],
    text: "ღონისძიების ფარგლებში საერთაშორისო აუდიტორიას გაეცნობა თბილისი, როგორც ინოვაციური, მრავალფეროვანი და შთამაგონებელი ქალაქი, რომელიც ქმნის მაღალი ხარისხის გამოცდილებას როგორც ვიზიტორებისთვის, ისე ინვესტორებისა და შემოქმედებითი სფეროს წარმომადგენლებისთვის.",
  },
  modern: {
    title: "თანამედროვე თბილისი",
    display: "MODERN TBILISI",
    text1: "ღონისძების ფარგლებში დედაქალაქს ეწვევიან საერთაშორისო სტუმრები, ჰოლივუდის ლოკაციის მენეჯერები, საერთაშორისო სტუდიების კონსულტანტები და „კონტენტ კრეატორები“, რომლებიც საკუთარ კონტენტში ასახავენ თბილისს როგორც მზარდ ტურისტულ ჰაბს და სოციალური ქსელების სხვადასხვა პლატფორმის საშუალებით ხელს შეუწყობენ მისი საერთაშორისო მასშტაბით პოპულარიზაციას.",
    text2: "ინიციატივა ხელს შეუწყობს ქალაქის საერთაშორისო ცნობადობის გაზრდას, ტურისტული მიმზიდველობის გაძლიერებას, ახალი პარტნიორობების ჩამოყალიბებასა და თბილისის თანამედროვე იმიჯის კიდევ უფრო განმტკიცებას მსოფლიო მასშტაბით.",
  },
  tourist: {
    title: "თბილისი — ამომავალი ტურისტული ქალაქი",
    intro: "აღნიშნული აქტივობა მნიშვნელოვნად გააძლიერებს ქალაქის ტურისტულ იმიჯს, გაზრდის მის ცნობადობას გლობალურ აუდიტორიაში და შექმნის დამატებით შესაძლებლობებს ტურიზმის, კულტურისა და შემოქმედებითი ინდუსტრიების განვითარებისთვის.",
    showcaseLabel: "ღონისძიება ქალაქს წარმოაჩენს, როგორც:",
    showcase: [
      "მიმზიდველ და კონკურენტუნარიან მიმართულებას",
      "თანამედროვე, დინამიკურ და უსაფრთხო ქალაქს",
      "კულტურული და შემოქმედებითი ჰაბს",
    ],
    expo: "ექსპო ზრდის ქალაქის ცნობადობას საერთაშორისო ბაზარზე და აძლიერებს მის ბრენდს.",
    strategic: "ტურისტული ექსპოს ჩატარება ქალაქისთვის სტრატეგიულად მნიშვნელოვანი ინსტრუმენტია, რადგან იგი ერთდროულად ემსახურება ეკონომიკურ, იმიჯურ და სოციალურ განვითარებას.",
    eduTitle: "საგანმანათლებლო პროგრამა",
    edu1: "ღონისძიების ფარგლებში დაგეგმილია საგანმანათლებლო სესიებისა და ტრენინგების ჩატარება, რომლებიც მიმართული იქნება ბლოგერობის განვითარებაზე, სოციალური ქსელების გამოყენებით პროდუქტისა და სერვისების ეფექტიან პოპულარიზაციაზე, ციფრული მარკეტინგის თანამედროვე სტრატეგიებზე, ასევე კომუნიკაციისა და კონტენტის შექმნის დაკავშირებულ თემებზე.",
    edu2: "პროგრამა უზრუნველყოფს როგორც თეორიული ცოდნის გადაცემას, ისე პრაქტიკული გამოცდილების მიღებას, რაც მონაწილეებს შესაძლებლობას მისცემს ეფექტიანად გამოიყენონ სოციალური მედია სხვადასხვა პროდუქტის, ინიციატივისა და იდეის პოპულარიზაციის პროცესში.",
  },
  film: {
    title: "თბილისი — აღმოსავლეთ ევროპის ყველაზე მიმზიდველი გადასაღები ქალაქი",
    text1: "ექსპოს ფარგლებში ქალაქს ეწვევა ჰოლივუდისა და საერთაშორისო საპროდუსერო კომპანიების 20-მდე წარმომადგენელი, რომლებიც გაეცნობიან თბილისს, როგორც ამომავალ ლოკაციას და მოახდენენ ქალაქის პოპულარიზაციას საერთაშორისო მასშტაბით (სტატიები, ბლოგები, საერთაშორისო გამოცემებში განთავსება — Variety, World of Locations)",
    text2: "ექსპოს დაწყებამდე მოწვეულ სტუმრებს საშუალება ექნებათ ორი დღის განმავლობაში აღმოაჩინონ თბილისის საუკეთესო და ჯერ კიდევ უცნობი გადასაღები ადგილები, რომელთა შესახებ დეტალურად ისაუბრებენ უშუალოდ სესიების მიმდინარეობისას.",
  },
  gastro: {
    title: "თბილისი — როგორც გასტრონომიული თავგადასავალი",
    text1: "ქალაქი როგორც გასტრონომიული თავგადასავალი წარმოჩინდება მრავალფეროვანი კულინარიული გამოცდილებების სივრცედ, სადაც ერთმანეთთან ჰარმონიულად ერწყმის ტრადიციული სამზარეულო, თანამედროვე კულინარიული ტენდენციები და ადგილობრივი პროდუქტის უნიკალური ხასიათი.",
    text2: "ქალაქის რესტორნები, ბაზრები, ღვინის ბარები და მცირე საოჯახო ობიექტები სტუმრებს სთავაზობს არა მხოლოდ კერძებს, არამედ კულტურულ გამოცდილებას, რომელიც ასახავს ადგილობრივ ისტორიას, წეს-ჩვეულებებსა და ცხოვრების სტილს. გასტრონომია ამ კონტექსტში იქცევა ტურისტული მიმზიდველობის მნიშვნელოვან კომპონენტად, რომელიც ხელს უწყობს ქალაქის პოზიციონირებას როგორც ავთენტური, ინოვაციური და მრავალფეროვანი ტურისტული მიმართულების.",
  },
  forum: {
    title: "WELCOME TBILISI",
    subtitle: "უნიკალური საერთაშორისო ღონისძიება",
    unites: "აერთიანებს კინოს, გასტრონომიას, მოდას, ტურიზმსა და თანამედროვე ხელოვნების მიმართულებას ერთ სივრცეში. ფორუმის ფარგლებში გაიმართება პანელური დისკუსიები, სალონური საუბრები, მასტერკლასები, ტრეინინგები და გამოცდილების გაზიარების სესიები, რომელშიც მონაწილეობას მიიღებენ ქართველი და საერთაშორისო დონის სპიქერები, ხელოვანები, კინომწარმოებლები, შეფ-მზარეულები, მოდის ექსპერტები, ტურიზმისა და კრეატიული ინდუსტრიების ლიდერები.",
    goal: "ღონისძიების მთავარი მიზანია თბილისის წარმოჩენა როგორც უნიკალური გადასაღები ლოკაცია, ამომავალი ტურისტული ქალაქი და მრავალსაუკუნოვანი კულინარიული ტრადიციების ცენტრი. ქალაქი, რომელიც გაჯერებულია დახვეწილი გემოვნებიანი მაცხოვრებლებით. თბილისი — როგორც ხელოვნების ნიმუში.",
  },
  partners: {
    title: "ახალი პარტნიორები & ინვესტიციები",
    lead: "ღონისძიება აერთიანებს:",
    list: [
      "ტურ ოპერატორებს",
      "ინვესტორებს",
      "ავიაკომპანიებს",
      "კულტურისა და კრეატიული ინდუსტრიის წარმომადგენლებს",
    ],
    outro: "ექსპო ქმნის გრძელვადიანი თანამშრომლობის და ინვესტიციების მოზიდვის შესაძლებლობას.",
  },
  economy: {
    title: "ეკონომიკური ეფექტი",
    lead: "ტურისტული ექსპო:",
    list: [
      "ზრდის ტურისტების ნაკადს",
      "ასტიმულირებს სასტუმროების, რესტორნების, ტრანსპორტისა და მომსახურების სექტორებს",
      "ქმნის ახალ სამუშაო ადგილებს",
      "ხელს უწყობს მცირე და საშუალო ბიზნესის განვითარებას",
    ],
  },
  urban: {
    title: "თბილისის ურბანული და სამშენებლო განვითარების წარმოჩენა",
    lead: "ღონისძიება მნიშვნელოვან როლს შეასრულებს თბილისის, როგორც თანამედროვე, განვითარებადი და საერთაშორისო თანამშრომლობაზე ორიენტირებული ქალაქის წარმოჩენაში.",
    listLead: "საერთაშორისო სპიკერებისა და სტუმრების მონაწილეობა ხელს შეუწყობს:",
    list: [
      "თბილისის საინვესტიციო და სამშენებლო პოტენციალის გაცნობას საერთაშორისო პროფესიული წრეებისთვის",
      "თანამედროვე ურბანული განვითარების, არქიტექტურისა და მდგრადი მშენებლობის მიმართულებით გამოცდილების გაცვლას",
      "ქალაქის, როგორც რეგიონული პროფესიული და ბიზნესცენტრის პოზიციონირების გაძლიერებას",
      "ახალი საერთაშორისო პროექტებისა და პროფესიული თანამშრომლობების ფორმირებას",
      "სამშენებლო, არქიტექტურულ და ურბანულ სექტორებში ინოვაციების დანერგვის წახალისებას",
    ],
  },
  business: {
    title: "ბიზნესის განვითარების ხელშეწყობა",
    lead: "ღონისძიება ქმნის უნიკალურ პლატფორმას, სადაც ერთმანეთს შეხვდებიან ბიზნესის ლიდერები, საერთაშორისო და ქართველი ექსპერტები, ინვესტორები, სახელმწიფო უწყებების წარმომადგენლები, აკადემიური წრეები და პროფესიული საზოგადოება. ასეთი მასშტაბის ფორუმი ხელს უწყობს:",
    list: [
      "ახალი საქმიანი პარტნიორობებისა და კომერციული ურთიერთობების ჩამოყალიბებას",
      "საერთაშორისო გამოცდილებისა და ინოვაციური პრაქტიკის გაზიარებას",
      "ახალი ინვესტიციებისა და ერთობლივი პროექტების ინიცირებას",
      "ქართული კომპანიების ცნობადობის ზრდას როგორც ადგილობრივ, ისე საერთაშორისო აუდიტორიაში",
      "პროფესიული ქსელის გაფართოებასა და B2B ურთიერთობების განვითარებას",
    ],
  },
  speakers: {
    title: "მოწვეული უცხოელი სპიკერები",
  },
  finale: {
    thanks: "გმადლობთ!",
    dates: "23-24-25 ოქტომბერი, 2026 · თბილისი",
  },
};

const en: Content = {
  nav: { lang: "ქარ" },
  hero: {
    dates: "23-24-25 October, 2026",
    address: "2 Freedom Square",
    venue: "Tbilisi City Assembly Building",
  },
  mission: {
    text: "The goal of the event is to position Tbilisi as a <b>modern</b>, <b>dynamic</b> and <b>internationally competitive</b> city. The project showcases the <b>capital's progress</b> in contemporary architecture, the creative industries, culture, tourism and gastronomy. It also highlights <b>Tbilisi's unique ability</b> to harmoniously blend its historical heritage with modern urban development.",
  },
  facts: {
    title: "Event supporters:",
    supportersTitle: "Event supporters",
    supporters: [
      "Tbilisi City Hall",
      "LEPL Creative Georgia",
      "Ministry of Culture of Georgia",
      "Georgian National Tourism Administration",
      "NEXT",
    ],
  },
  concept: {
    title: "Event Concept",
    lead: "For three days, the Tbilisi City Assembly building will transform into an international platform dedicated to the city's modern achievements, experience sharing and professional collaboration.",
    side: "The space will bring together international speakers, leading local experts, and representatives of business, education and the private sector.",
    spacesTitle: "The event will run simultaneously across three independent conference spaces,",
    formatsLabel: "hosting non-stop:",
    formats: [
      "Panel discussions",
      "Thematic workshops",
      "Practical trainings",
      "B2B meetings",
      "Masterclasses",
    ],
    experts: "Over three days, participants will have the opportunity to attend talks by invited international speakers and discover the experience and practical knowledge of more than 50 Georgian industry experts.",
    tickets: "Attend the event by purchasing tickets on the TKT.GE platform:",
    ticketLabel: "Buy tickets",
    stats: [
      { value: 3, suffix: "", label: "days" },
      { value: 3, suffix: "", label: "conference spaces" },
      { value: 50, suffix: "+", label: "Georgian experts" },
    ],
  },
  gala: {
    title: "Closing Event",
    lead: "The official closing of the forum will be celebrated with a gala dinner, held in a special, festive atmosphere.",
    invitedTitle: "Invited to the gala evening:",
    invited: [
      "International speakers",
      "Georgian industry experts",
      "Representatives of partner companies and organisations",
      "Event supporters and guests of honour",
    ],
    outro: "The gala dinner will be a symbol of three days of successful collaboration, new partnerships and the beginning of future international projects — an informal setting for networking, sharing experience and deepening business connections.",
  },
  agenda: {
    title: "Agenda",
    lead: "Three days, three themes — panel discussions daily from 12:00.",
    days: [
      {
        num: "Day 01",
        date: "23 October",
        theme: "Modern Tbilisi: The Next Chapter",
        items: [
          { time: "12:00", title: "The city is the story: what makes modern Tbilisi unique?",
          speakers: [
            { name: "Becky Brake", role: "Hollywood Supervising Location Manager, Location Scout & Producer" },
            { name: "Shaad Heerah", role: "Regional Director, Eastern Europe & Central Asia, Tierra Hospitality Partners" },
            { name: "Irakli Makatsaria", role: "Producer & Founder, MAQ Entertainment" },
            { name: "Rati Morchiladze", role: "CEO & Chief Investment Officer, Foresight Investment Group" },
            { name: "NEXT Group", role: "Real Estate Developer · Hospitality & Branded Residences" },
          ] },
          { time: "13:30", title: "From location to destination: can film put Tbilisi on the global map?",
          speakers: [
            { name: "Patrick Mignano", role: "Hollywood Location Manager & Filmmaker" },
            { name: "Shani Orona", role: "Award-Winning Location Manager" },
            { name: "Iryna Hrinko", role: "International Film Producer & Founder, SE Films Studio" },
            { name: "Oz Vidal", role: "International Film & Television Producer" },
          ] },
          { time: "15:00", title: "Tbilisi as a filmmaker's city: what does the international industry see?",
          speakers: [
            { name: "Shahar Stroh", role: "Film Producer & Development Executive, Moonstone Entertainment" },
            { name: "Shota Alania", role: "Producer & Partner, Münchhausen Productions Georgia" },
            { name: "Luka Lebanidze", role: "POSTRED" },
            { name: "Mariam Vosuments", role: "Film Producer & Head of Development, Cuba Films" },
          ] },
          { time: "16:30", title: "Building a global city: how can Tbilisi attract international attention?",
          speakers: [
            { name: "Harry Johnson", role: "Managing Partner, Tierra Hospitality Partners" },
            { name: "Elene Otarashvili", role: "Regional Director, Eastern Europe & Asia, Tierra Hospitality Partners" },
            { name: "Michael J. Burmeister", role: "Hollywood Location Manager" },
            { name: "Khaled Ben Younes", role: "Executive Producer & Co-Founder, The Creator Space" },
            { name: "Aleksandre Kvaratskhelia", role: "General Manager, Tbilisi Marriott, Courtyard by Marriott Tbilisi & Moxy Tbilisi" },
          ] },
          { time: "18:00", title: "Creativity, culture & the new Tbilisi: who is shaping the city?",
          speakers: [
            { name: "Lori Balton", role: "Hollywood Location Scout" },
            { name: "Sandro Gabilaia", role: "Founder, Industria Films" },
            { name: "Beka Pkhakadze", role: "Founder & Creative Director, STIPFOLD" },
            { name: "David Legrand", role: "Executive Chef" },
          ] },
          { time: "19:30", title: "The next chapter: what should Tbilisi become?",
          note: "Exclusive private session — by invitation only" },
        ],
      },
      {
        num: "Day 02",
        date: "24 October",
        theme: "Tbilisi: Designed for the Future",
        items: [
          { time: "12:00", title: "Who is designing the new Tbilisi?",
          subtitle: "Where tourism, gastronomy & creativity shape the city's new chapter",
          speakers: [
            { name: "Jordi Kuijt", role: "Hospitality and Destination Development Executive, Archi Hospitality" },
            { name: "Gabriela Ditetova", role: "General Manager, Paragraph Freedom Square, a Luxury Collection Hotel, Tbilisi & Paragraph Golf & Spa Tabori" },
            { name: "Mariam Kuchuloria", role: "CEO, European Business Association; Board Member, EBA Worldwide Network" },
            { name: "Irakli Nadareishvili", role: "Founder & Director, Tbilisi Gastro Week" },
          ] },
          { time: "13:30", title: "Architecture as a destination: can design change how the world sees Tbilisi?",
          subtitle: "Tbilisi through the lens: architecture as an asset for the global film industry",
          speakers: [
            { name: "Michael J. Burmeister", role: "Hollywood Location Manager" },
            { name: "Becky Brake", role: "Location Management" },
            { name: "Shalom Eizenbach", role: "International Producer & Production Professional; Founder of SE Film Production" },
            { name: "Maia Gurabanidze", role: "Co-Founder & Head of Production, Industria" },
            { name: "Galit Rosenstein", role: "Casting Director, Producer & Founder, Galit Rosenstein Casting Studio" },
          ] },
          { time: "15:00", title: "What can filmmakers see that developers don't?",
          speakers: [
            { name: "Shani Orona", role: "Award-Winning Location Manager" },
            { name: "Nini Sardlishvili", role: "Film Producer & Line Producer, 100 Films" },
            { name: "Khaled Ben Younes", role: "Co-Founder, Chief Operating Officer & Executive Producer, The Creator Space" },
            { name: "Ana Davitaia", role: "Co-Founder & Film Producer, Studio Gambit" },
          ] },
          { time: "16:30", title: "Heritage vs. future: how should Tbilisi develop?",
          speakers: [
            { name: "Tamar Khakhishvili", role: "Deputy Chairperson, Agency of Protected Areas of Georgia" },
            { name: "Mindia Gurgenidze", role: "Architect & Founder, Gurgenidze Architecture" },
            { name: "Elene Otarashvili", role: "Hospitality Executive & Tourism Leader, Tierra Hospitality Partners" },
            { name: "George Barkalaia", role: "Rector & Full Professor, New Vision University" },
          ] },
          { time: "18:00", title: "From project to place: what makes a development iconic?",
          note: "Curated by NEXT" },
          { time: "19:30", title: "Designing the next Tbilisi: what should the city look like in 2035?",
          subtitle: "What should the future Tbilisi look, feel and function like?",
          speakers: [{ name: "STIPFOLD", role: "Tbilisi 2035" }] },
        ],
      },
      {
        num: "Day 03",
        date: "25 October",
        theme: "Tbilisi: Tourism, Gastronomy & Creative Lifestyle",
        items: [
          { time: "12:00", title: "Beyond tourism: selling an experience",
          speakers: [
            { name: "Konstantin Tedeluri", role: "Chef & Culinary Artist" },
            { name: "Gega Metepshishvili", role: "Business Development Director, Transporter LLC" },
            { name: "Nata Kvachantiradze", role: "Founder, Georgian Tourism Award Association" },
            { name: "Nikoloz Siradze", role: "Managing Partner, National Tourism Awards" },
          ] },
          { time: "13:30", title: "From Georgian cuisine to global cuisine",
          note: "Private masterclass for international guests — curated by Marriott" },
          { time: "15:00", title: "Tbilisi after dark: culture, nightlife & the creative economy",
          speakers: [
            { name: "Enzo Neri", role: "Chef & Restaurateur, Mudra by Enzo Neri" },
            { name: "Ria Keburia", role: "Director, Ria Keburia Foundation & Ria Keburia Gallery; Fashion Designer" },
            { name: "Elene Kapanadze", role: "Contemporary Art Curator" },
            { name: "Natia Nikoleishvili", role: "Film Producer and Line Producer" },
            { name: "Diana Morsonashvili", role: "Curator & Lecturer; Director, FineArtWay LLC; Partner, Who I Am Gallery" },
          ] },
          { time: "16:30", title: "From local to global: can Tbilisi become a creative lifestyle destination?",
          speakers: [
            { name: "Harry Johnson", role: "Executive Director, Tierra Hospitality Partners" },
            { name: "Irakli Makatsaria", role: "Founder, MAQ Entertainment" },
            { name: "Glenn Nobbs", role: "Director of Operations International, Legacy Hotels Holding" },
            { name: "Tatia Bidzinashvili", role: "Head of Film in Georgia Program" },
            { name: "Patrick Mignano", role: "Hollywood Location Manager & Filmmaker" },
          ] },
          { time: "18:00", title: "The taste of Tbilisi: gastronomy as a global city brand",
          note: "Access by VIP pass only" },
        ],
      },
    ],
  },
  unique: {
    kicker: "WELCOME TBILISI",
    title: "A Unique International Event",
    pillars: [
      "Tbilisi — a modern European city",
      "Tbilisi — a rising tourist destination",
      "Tbilisi — a culinary adventure",
      "Tbilisi — as a filming location",
    ],
    text: "Through the event, an international audience will discover Tbilisi as an innovative, diverse and inspiring city that creates high-quality experiences for visitors, investors and representatives of the creative field alike.",
  },
  modern: {
    title: "Modern Tbilisi",
    display: "MODERN TBILISI",
    text1: "During the event, the capital will welcome international guests, Hollywood location managers, consultants of international studios and content creators, who will feature Tbilisi in their content as a growing tourist hub and promote it internationally across social media platforms.",
    text2: "The initiative will help increase the city's international recognition, strengthen its touristic appeal, form new partnerships and further consolidate Tbilisi's modern image on a global scale.",
  },
  tourist: {
    title: "Tbilisi — A Rising Tourist Destination",
    intro: "This activity will significantly strengthen the city's tourist image, raise its profile among global audiences and create additional opportunities for the development of tourism, culture and the creative industries.",
    showcaseLabel: "The event will present the city as:",
    showcase: [
      "An attractive and competitive destination",
      "A modern, dynamic and safe city",
      "A cultural and creative hub",
    ],
    expo: "The expo raises the city's visibility on the international market and strengthens its brand.",
    strategic: "Hosting a tourism expo is a strategically important instrument for the city, serving economic, image and social development all at once.",
    eduTitle: "Educational programme",
    edu1: "The event will include educational sessions and trainings focused on developing blogging skills, effectively promoting products and services through social media, modern digital marketing strategies, and topics related to communication and content creation.",
    edu2: "The programme delivers both theoretical knowledge and hands-on experience, enabling participants to use social media effectively to promote products, initiatives and ideas.",
  },
  film: {
    title: "Tbilisi — Eastern Europe's Most Attractive Filming City",
    text1: "As part of the expo, the city will host up to 20 representatives of Hollywood and international production companies, who will discover Tbilisi as a rising location and promote the city internationally (articles, blogs, features in international publications — Variety, World of Locations)",
    text2: "Before the expo begins, invited guests will spend two days discovering Tbilisi's best and still-unknown filming locations, which they will discuss in detail during the sessions.",
  },
  gastro: {
    title: "Tbilisi — A Gastronomic Adventure",
    text1: "The city as a gastronomic adventure is presented as a space of diverse culinary experiences, where traditional cuisine, contemporary culinary trends and the unique character of local produce blend in harmony.",
    text2: "The city's restaurants, markets, wine bars and small family-run venues offer guests not just dishes but a cultural experience that reflects local history, customs and lifestyle. In this context, gastronomy becomes a key component of touristic appeal, helping position the city as an authentic, innovative and diverse travel destination.",
  },
  forum: {
    title: "WELCOME TBILISI",
    subtitle: "A unique international event",
    unites: "It unites cinema, gastronomy, fashion, tourism and contemporary art in one space. The forum will feature panel discussions, salon talks, masterclasses, trainings and experience-sharing sessions, with the participation of Georgian and international speakers, artists, filmmakers, chefs, fashion experts, and leaders of the tourism and creative industries.",
    goal: "The main goal of the event is to present Tbilisi as a unique filming location, a rising tourist city and a centre of centuries-old culinary traditions. A city filled with residents of refined taste. Tbilisi — as a work of art.",
  },
  partners: {
    title: "New Partners & Investments",
    lead: "The event brings together:",
    list: [
      "Tour operators",
      "Investors",
      "Airlines",
      "Representatives of culture and the creative industries",
    ],
    outro: "The expo creates opportunities for long-term collaboration and attracting investment.",
  },
  economy: {
    title: "Economic Impact",
    lead: "The tourism expo:",
    list: [
      "Increases the flow of tourists",
      "Stimulates the hotel, restaurant, transport and service sectors",
      "Creates new jobs",
      "Supports the development of small and medium businesses",
    ],
  },
  urban: {
    title: "Showcasing Tbilisi's Urban & Construction Development",
    lead: "The event will play an important role in presenting Tbilisi as a modern, developing city oriented towards international collaboration.",
    listLead: "The participation of international speakers and guests will support:",
    list: [
      "Introducing Tbilisi's investment and construction potential to international professional circles",
      "Exchanging experience in modern urban development, architecture and sustainable construction",
      "Strengthening the city's positioning as a regional professional and business centre",
      "Forming new international projects and professional collaborations",
      "Encouraging innovation in the construction, architecture and urban sectors",
    ],
  },
  business: {
    title: "Supporting Business Development",
    lead: "The event creates a unique platform where business leaders, international and Georgian experts, investors, government representatives, academia and the professional community meet. A forum of this scale supports:",
    list: [
      "Forming new business partnerships and commercial relationships",
      "Sharing international experience and innovative practice",
      "Initiating new investments and joint projects",
      "Raising the profile of Georgian companies among local and international audiences",
      "Expanding professional networks and developing B2B relationships",
    ],
  },
  speakers: {
    title: "Invited International Speakers",
  },
  finale: {
    thanks: "Thank you!",
    dates: "23-24-25 October, 2026 · Tbilisi",
  },
};

// speaker line-ups are kept in English on both language versions
ka.agenda.days.forEach((d, i) =>
  d.items.forEach((it, j) => {
    it.speakers = en.agenda.days[i].items[j].speakers;
  })
);

export const content: Record<Lang, Content> = { ka, en };
