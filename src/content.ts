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
    scroll: string;
  };
  mission: { text: string };
  facts: {
    title: string;
    supportersTitle: string;
    supporters: string[];
    visitorsLabel: string;
    visitorsValue: number;
    visitorsSuffix: string;
  };
  concept: {
    title: string;
    lead: string;
    side: string;
    spacesTitle: string;
    formatsLabel: string;
    formats: string[];
    experts: string;
    access: string;
    stats: { value: number; suffix: string; label: string }[];
  };
  campaign: {
    title: string;
    lead: string;
    items: string[];
    goal: string;
  };
  gala: {
    title: string;
    lead: string;
    invitedTitle: string;
    invited: string[];
    outro: string;
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
  pr: {
    title: string;
    prTitle: string;
    prList: string[];
    emailTitle: string;
    emailList: string[];
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
    scroll: "ჩამოსქროლეთ",
  },
  mission: {
    text: "ღონისძიების მიზანია თბილისის, როგორც <b>თანამედროვე</b>, <b>დინამიკური</b> და <b>საერთაშორისო</b> მასშტაბით კონკურენტუნარიანი ქალაქის პოზიციონირება და პოპულარიზაცია. ღონისძიება წარმოაჩენს იმ <b>მნიშვნელოვან პროგრესს</b>, რომელსაც ქალაქმა მიაღწია თანამედროვე არქიტექტურის, შემოქმედებითი ინდუსტრიების, კულტურის, ტურიზმისა და გასტრონომიის მიმართულებით, ასევე წარმოაჩენს <b>თბილისის უნიკალურ შესაძლებლობას</b>, წარმატებით შეუთავსოს ისტორიული მემკვიდრეობა თანამედროვე ურბანულ განვითარებას",
  },
  facts: {
    title: "ღონისძიების მხარდამჭერები:",
    supportersTitle: "ღონისძიების მხარდამჭერები",
    supporters: [
      "ქალაქ თბილისის მერია",
      "სსიპ შემოქმედებითი საქართველო",
      "საქართველოს კულტურის სამინისტრო",
      "საქართველოს ტურიზმის ეროვნული ადმინისტრაცია",
    ],
    visitorsLabel: "ვიზიტორთა რაოდენობა",
    visitorsValue: 10000,
    visitorsSuffix: " სტუმარი",
  },
  concept: {
    title: "ღონისძიების კონცეფცია",
    lead: "თბილისის საკრებულოს შენობა სამი დღის განმავლობაში გადაიქცევა ქალაქის თანამედროვე მიღწევების, შესაძლებლობების, გამოცდილების გაზიარებისა და პროფესიული თანამშრომლობის საერთაშორისო პლატფორმად,",
    side: "სადაც ერთ სივრცეში გაერთიანდებიან მსოფლიოს სხვადასხვა ქვეყნიდან მოწვეული სპიკერები, საქართველოს წამყვანი დარგობრივი ექსპერტები, ბიზნესის, განათლების, სახელმწიფო და კერძო სექტორის წარმომადგენლები.",
    spacesTitle: "ღონისძიება ერთდროულად სამ დამოუკიდებელ საკონფერენციო სივრცეში გაიმართება,",
    formatsLabel: "სადაც უწყვეტ რეჟიმში ჩატარდება:",
    formats: [
      "პანელური დისკუსიები",
      "თემატური ვორქშოფები",
      "პრაქტიკული ტრენინგები",
      "B2B შეხვედრები",
      "მასტერკლასები",
    ],
    experts: "სამი დღის განმავლობაში მონაწილეებს ექნებათ შესაძლებლობა, დაესწრონ საერთაშორისო დონის მოწვეული სპიკერების გამოსვლებს, ასევე გაეცნონ 150-ზე მეტი ქართველი დარგობრივი ექსპერტის გამოცდილებასა და პრაქტიკულ ცოდნას.",
    access: "ღონისძიებაზე დასწრება შესაძლებელი იქნება მხოლოდ წინასწარი რეგისტრაციითა და სპეციალური მოსაწვევებით, რაც უზრუნველყოფს მონაწილეთა ეფექტურ მართვასა და მაღალი ხარისხის გამოცდილებას.",
    stats: [
      { value: 3, suffix: "", label: "დღე" },
      { value: 3, suffix: "", label: "საკონფერენციო სივრცე" },
      { value: 150, suffix: "+", label: "ქართველი ექსპერტი" },
      { value: 10000, suffix: "", label: "სტუმარი" },
    ],
  },
  campaign: {
    title: "საკომუნიკაციო და პოპულარიზაციის კამპანია",
    lead: "ღონისძიების მასშტაბური საინფორმაციო კამპანია 25 აგვისტოდან დაიწყება და ორი თვის განმავლობაში მოიცავს მრავალარხიან კომუნიკაციას:",
    items: [
      "სატელევიზიო ეთერებსა და ინტერვიუებს",
      "სოციალური მედიის ინტენსიურ კამპანიას",
      "პროფესიონალურ ფოტო და ვიდეოგადაღებას",
      "საერთაშორისო და ქართველი სპიკერების ვიდეომიმართვებს",
      "ღონისძიების პროგრამისა და დღის წესრიგის ეტაპობრივ გამოქვეყნებას",
      "პარტნიორი ორგანიზაციებისა და მედიის აქტიურ ჩართულობას",
    ],
    goal: "კამპანიის მთავარი მიზანია WELCOME TBILISI-ის, როგორც რეგიონის ერთ-ერთი ყველაზე მნიშვნელოვანი ღონისძიების პოზიციონირება, მაღალი ინტერესის შექმნა და ფართო აუდიტორიის მოზიდვა.",
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
  pr: {
    title: "მედია გეგმა",
    prTitle: "PR კამპანია:",
    prList: [
      "პრესკონფერენცია / სატელევიზიო ეთერი პროექტის ანონსისთვის",
      "ინტერვიუები სპიკერებთან",
      "სტატიები ადგილობრივ და საერთაშორისო მედიაში",
      "პრესრელიზების სერია",
    ],
    emailTitle: "Email Marketing:",
    emailList: [
      "სპიკერების ანონსი",
      "რეგისტრაცია / აკრედიტაცია პანელური დისკუსიებისთვის",
      "ღონისძიების პროგრამის განახლებები",
      "პარტნიორების შეთავაზებები",
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
    scroll: "Scroll down",
  },
  mission: {
    text: "The goal of the event is to position and promote Tbilisi as a <b>modern</b>, <b>dynamic</b> and <b>internationally competitive</b> city. The event showcases the <b>significant progress</b> the city has achieved in contemporary architecture, creative industries, culture, tourism and gastronomy, and highlights <b>Tbilisi's unique ability</b> to successfully blend its historical heritage with modern urban development",
  },
  facts: {
    title: "Event supporters:",
    supportersTitle: "Event supporters",
    supporters: [
      "Tbilisi City Hall",
      "LEPL Creative Georgia",
      "Ministry of Culture of Georgia",
      "Georgian National Tourism Administration",
    ],
    visitorsLabel: "Number of visitors",
    visitorsValue: 10000,
    visitorsSuffix: " guests",
  },
  concept: {
    title: "Event Concept",
    lead: "For three days, the Tbilisi City Assembly building will transform into an international platform for the city's modern achievements, opportunities, experience sharing and professional collaboration,",
    side: "bringing together in one space invited speakers from around the world, Georgia's leading industry experts, and representatives of business, education, and the public and private sectors.",
    spacesTitle: "The event will run simultaneously across three independent conference spaces,",
    formatsLabel: "hosting non-stop:",
    formats: [
      "Panel discussions",
      "Thematic workshops",
      "Practical trainings",
      "B2B meetings",
      "Masterclasses",
    ],
    experts: "Over three days, participants will have the opportunity to attend talks by invited international speakers and discover the experience and practical knowledge of more than 150 Georgian industry experts.",
    access: "Attendance will be possible only through advance registration and special invitations, ensuring effective participant management and a high-quality experience.",
    stats: [
      { value: 3, suffix: "", label: "days" },
      { value: 3, suffix: "", label: "conference spaces" },
      { value: 150, suffix: "+", label: "Georgian experts" },
      { value: 10000, suffix: "", label: "guests" },
    ],
  },
  campaign: {
    title: "Communication & Promotion Campaign",
    lead: "The event's large-scale information campaign launches on 25 August and will span two months of multi-channel communication:",
    items: [
      "Television broadcasts and interviews",
      "An intensive social media campaign",
      "Professional photo and video production",
      "Video addresses from international and Georgian speakers",
      "Step-by-step publication of the event programme and agenda",
      "Active engagement of partner organisations and media",
    ],
    goal: "The main goal of the campaign is to position WELCOME TBILISI as one of the region's most significant events, generating high interest and attracting a wide audience.",
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
  pr: {
    title: "Media Plan",
    prTitle: "PR campaign:",
    prList: [
      "Press conference / television broadcast to announce the project",
      "Interviews with speakers",
      "Articles in local and international media",
      "A series of press releases",
    ],
    emailTitle: "Email Marketing:",
    emailList: [
      "Speaker announcements",
      "Registration / accreditation for panel discussions",
      "Event programme updates",
      "Partner offers",
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

export const content: Record<Lang, Content> = { ka, en };
