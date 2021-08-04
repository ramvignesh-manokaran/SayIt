import { LibraryDetail } from "../components/LibraryDetails";

export const libraryDetails: LibraryDetail[] = [
  {
    header: "A",
    word: "Apple",
    syllable: "a.pl /ˈæp.əl/"
  },
  {
    header: "B",
    word: "Book",
    syllable: "buk /bʊk/"
  },
  {
    header: "G",
    word: "Goodbye",
    syllable: "gud.bai /ɡʊdˈbaɪ/"
  },
  {
    header: "H",
    word: "Hello",
    syllable: "heh.low /həˈləʊ"
  }
];

export interface Conversation {
  word: string;
  syllable: string;
  learnt: boolean;
}

export const wordSyllables: Conversation[] = [
  {
    word: "Me",
    syllable: "mee /mi/",
    learnt: true
  },
  {
    word: "Hello",
    syllable: "heh.low /həˈləʊ/ ",
    learnt: true
  },
  {
    word: "Goodbye",
    syllable: "gud.bai /ɡʊdˈbaɪ/",
    learnt: true
  },
  {
    word: "Help",
    syllable: "help /hɛlp/",
    learnt: true
  },
  {
    word: "Me",
    syllable: "mee /mi/",
    learnt: true
  },
  {
    word: "Yes",
    syllable: "yes /jɛs/",
    learnt: true
  },
  {
    word: "No",
    syllable: "no /noʊ/",
    learnt: false
  },
  {
    word: "You",
    syllable: "yoo /juː/",
    learnt: false
  },
  {
    word: "Thank You",
    syllable: "thangk yoo /ˈθæŋk juː/",
    learnt: false
  },
  {
    word: "See you",
    syllable: "see yoo /ˈsiː juː/",
    learnt: false
  },
  {
    word: "Home",
    syllable: "hom /hoʊm/",
    learnt: false
  },
  {
    word: "We",
    syllable: "wee /wiː/",
    learnt: false
  }
];

export const syllableAppData: string[] = ["2 letter Ps but just one P sound"];

export const syllableLeData: string[] = [
  "The second syllable is unstressed",
  "Only a dark L can be heard"
];
