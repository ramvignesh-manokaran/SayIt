import { ImageSourcePropType } from "react-native";
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
export type CategoryContent = {
  title: string,
  subtitle?: string
  content: string[] | ImageSourcePropType
}

export const voiceAndConsonantCategories: CategoryContent[][] = [
  [
    {
      title: "Short Vowels",
      content: ["/ɪ/", "/ʊ/"]
    },
    {
      title: "Long Vowels",
      content: ["/i:/", "/u:/"]
    },
    {
      title: "Double Vowels",
      content: ["/eɪ/", "/aɪ/"]
    }
  ],
  [
    {
      title: "Voiceless Consonants",
      content: ["/p/", "/t/"]
    },
    {
      title: "Voiced Consonants",
      content: ["/b/", "/d/"]
    },
    {
      title: "Other consonants",
      content: ["/r/", "/j/"]
    }
  ]
]

export const topicCategories: CategoryContent[] = [
  {
    title: "Conversation",
    subtitle: "5/18 words",
    content: require("../assets/images/conversation.png")
  },
  {
    title: "People",
    subtitle: "6/21 words",
    content: require("../assets/images/people.png")
  },
  {
    title: "Feelings",
    subtitle: "3/18 words",
    content: require("../assets/images/feelings.png")
  }
];