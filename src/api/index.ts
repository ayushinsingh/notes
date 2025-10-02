export interface NoteType {
    _id: string;
    title: string;
    tags: string[];
    content: string;
    lastEdited: string;
    isArchived: boolean;
    isDummy: boolean;
    __v: number;
  }

const notes: Array<NoteType> = [
    {
      _id: "6897a4bd55110b2bf17bd48d",
      title: "React Performance Optimization",
      tags: ["Dev", "React"],
      content:
        "Key performance optimization techniques:\n\n1. Code Splitting\n- Use React.lazy() for route-based splitting\n- Implement dynamic imports for heavy components\n\n2. Memoization\n- useMemo for expensive calculations\n- useCallback for function props\n- React.memo for component optimization\n\n3. Virtual List Implementation\n- Use react-window for long lists\n- Implement infinite scrolling\n\nTODO: Benchmark current application and identify bottlenecks",
      lastEdited: "2024-10-29T10:15:00Z",
      isArchived: false,
      isDummy: true,
      __v: 0,
    },
    {
      _id: "6897a4bd55110b2bf17bd48e",
      title: "Japan Travel Planning",
      tags: ["Travel", "Personal"],
      content:
        "Japan Trip Planning - Spring 2025\n\nItinerary Draft:\nWeek 1: Tokyo\n- Shibuya and Harajuku\n- TeamLab Digital Art Museum\n- Day trip to Mount Fuji\n\nWeek 2: Kyoto & Osaka\n- Traditional temples\n- Cherry blossom viewing\n- Food tour in Osaka\n\nBudget: $3000\nAccommodation: Mix of hotels and traditional ryokans\nJR Pass: 14 days\n\nTODO: Book flights 6 months in advance",
      lastEdited: "2024-10-28T16:45:00Z",
      isArchived: false,
      isDummy: true,
      __v: 0,
    },
    {
      _id: "6897a4bd55110b2bf17bd48f",
      title: "Favorite Pasta Recipes",
      tags: ["Cooking", "Recipes"],
      content:
        "Classic Italian Recipes:\n\n1. Carbonara\n- Eggs, pecorino, guanciale\n- No cream ever!\n- Save pasta water\n\n2. Cacio e Pepe\n- Pecorino Romano\n- Fresh black pepper\n- Technique is crucial\n\n3. Arrabbiata\n- San Marzano tomatoes\n- Fresh garlic\n- Red pepper flakes\n\nNote: Always use high-quality ingredients",
      lastEdited: "2024-10-27T14:30:00Z",
      isArchived: false,
      isDummy: true,
      __v: 0,
    },
    {
      _id: "6897a4bd55110b2bf17bd490",
      title: "TypeScript Migration Guide",
      tags: ["Dev", "React", "TypeScript"],
      content:
        "Project migration steps:\n\n1. Initial Setup\n- Install TypeScript dependencies\n- Configure tsconfig.json\n- Set up build pipeline\n\n2. Migration Strategy\n- Start with newer modules\n- Add type definitions gradually\n- Use 'any' temporarily for complex cases\n\n3. Testing Approach\n- Update test configuration\n- Add type testing\n- Validate build process\n\nDeadline: End of Q4 2024",
      lastEdited: "2024-10-26T09:20:00Z",
      isArchived: true,
      isDummy: true,
      __v: 0,
    },
    {
      _id: "6897a4bd55110b2bf17bd491",
      title: "Weekly Workout Plan",
      tags: ["Fitness", "Health"],
      content:
        "Monday: Upper Body\n- Bench Press 4x8\n- Rows 4x10\n- Shoulder Press 3x12\n- Pull-ups 3 sets\n\nWednesday: Lower Body\n- Squats 4x8\n- Romanian Deadlifts 3x10\n- Lunges 3x12 each\n- Calf Raises 4x15\n\nFriday: Full Body\n- Deadlifts 3x5\n- Push-ups 3x12\n- Leg Press 3x12\n- Core Work\n\nCardio: Tuesday/Thursday - 30 min run",
      lastEdited: "2024-10-25T18:10:00Z",
      isArchived: false,
      isDummy: true,
      __v: 0,
    },
    {
      _id: "6897a4bd55110b2bf17bd492",
      title: "Gift Ideas",
      tags: ["Personal", "Shopping"],
      content:
        "Birthday and Holiday Gift List:\n\nMom:\n- Cooking class subscription\n- Kindle Paperwhite\n- Spa day package\n\nDad:\n- Golf lessons\n- Wireless earbuds\n- BBQ accessories\n\nSister:\n- Art supplies set\n- Yoga mat kit\n- Coffee subscription\n\nBudget per person: $150-200",
      lastEdited: "2024-10-20T11:30:15Z",
      isArchived: true,
      isDummy: true,
      __v: 0,
    },
    {
      _id: "6897a4bd55110b2bf17bd493",
      title: "React Component Library",
      tags: ["Dev", "React"],
      content:
        "Custom Component Library Structure:\n\n1. Basic Components\n- Button\n- Input\n- Card\n- Modal\n\n2. Form Components\n- FormField\n- Select\n- Checkbox\n- RadioGroup\n\n3. Layout Components\n- Container\n- Grid\n- Flex\n\nAll components need:\n- TypeScript definitions\n- Unit tests\n- Storybook documentation\n- Accessibility support",
      lastEdited: "2024-10-15T14:23:45Z",
      isArchived: true,
      isDummy: true,
      __v: 0,
    },
    {
      _id: "6897a4bd55110b2bf17bd494",
      title: "Meal Prep Ideas",
      tags: ["Cooking", "Health", "Recipes"],
      content:
        "Weekly Meal Prep Plan:\n\nBreakfast Options:\n- Overnight oats\n- Egg muffins\n- Smoothie packs\n\nLunch Containers:\n- Greek chicken bowl\n- Buddha bowls\n- Tuna pasta salad\n\nSnacks:\n- Cut vegetables\n- Mixed nuts\n- Greek yogurt parfait\n\nPrep Time: Sunday 2-4pm\nStorage: Glass containers\nLasts: 4-5 days",
      lastEdited: "2024-10-12T09:45:15Z",
      isArchived: false,
      isDummy: true,
      __v: 0,
    },
    {
      _id: "6897a4bd55110b2bf17bd495",
      title: "Reading List",
      tags: ["Personal", "Dev"],
      content:
        "Current Reading Queue:\n\n1. Technical Books\n- Clean Architecture by Robert Martin\n- Designing Data-Intensive Applications\n- TypeScript Design Patterns\n\n2. Personal Development\n- Deep Work by Cal Newport\n- Atomic Habits\n- The Psychology of Money\n\nCurrently Reading: Clean Architecture\nNext Up: Deep Work\n\nGoal: One book per month",
      lastEdited: "2024-10-05T12:20:30Z",
      isArchived: false,
      isDummy: true,
      __v: 0,
    },
    {
      _id: "6897a4bd55110b2bf17bd496",
      title: "Fitness Goals 2025",
      tags: ["Fitness", "Health", "Personal"],
      content:
        "2025 Fitness Objectives:\n\n1. Strength Goals\n- Bench press: 225 lbs\n- Squat: 315 lbs\n- Deadlift: 405 lbs\n\n2. Cardio Goals\n- Run half marathon\n- 5k under 25 minutes\n\n3. Habits\n- Gym 4x per week\n- Daily 10k steps\n- Sleep 7+ hours\n\nTrack all workouts in Strong app",
      lastEdited: "2024-09-22T07:30:00Z",
      isArchived: false,
      isDummy: true,
      __v: 0,
    },
  ];

export const fetchNotes = async (type?: string) => {
  const filteredNotes = notes.filter(note => {
    if(type === "Archive Notes") {
      return note.isArchived;
    } else if(type === "All Notes" || !type) {
      return !note.isArchived;
    } else {
      return note.tags.includes(type);
    }
  });
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filteredNotes);
    }, 500);
  });
};

export const fetchNoteById = async (id: string) => {
  // Simulate network delay
  return new Promise<NoteType | null>((resolve) => {
    setTimeout(() => {
      const note = notes.find((note) => note._id === id) || null;
      resolve(note);
    }, 300);
  });
};

export const getAllTags = async () => {
  const tagSet = new Set<string>();
  notes.forEach(note => {
    note.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet);
}

export const createNote = async (note: Omit<NoteType, "_id" | "lastEdited" | "__v" | "isDummy">) => {
  // Simulate network delay and note creation
  return new Promise<NoteType>((resolve) => {
    setTimeout(() => {
      const newNote: NoteType = {
        ...note,
        _id: (Math.random() * 10000000000000000).toString(16),
        lastEdited: new Date().toISOString(),
        isDummy: false,
        __v: 0,
      };
      notes.push(newNote);
      resolve(newNote);
    }, 500);
  });
} 

export const updateNote = async (note: NoteType) => {
  // Simulate network delay and note update
  return new Promise<NoteType | null>((resolve) => {
    setTimeout(() => {
      const index = notes.findIndex(n => n._id === note._id);
      if(index !== -1) {
        const updatedNote = {
          ...note,
          lastEdited: new Date().toISOString(),
          isDummy: false,
        };
        notes[index] = updatedNote;
        resolve(updatedNote);
      } else {
        resolve(null);
      }
    }, 500);
  });
}

export const deleteNote = async (id: string) => {
  // Simulate network delay and note deletion
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      const index = notes.findIndex(n => n._id === id);
      if(index !== -1) {
        notes.splice(index, 1);
        resolve(true);
      } else {
        resolve(false);
      }
    }, 300);
  });
}

export const archiveNote = async (id: string) => {
  // Simulate network delay and note archiving
  return new Promise<NoteType | null>((resolve) => {
    setTimeout(() => {
      const index = notes.findIndex(n => n._id === id);
      if(index !== -1) {
        notes[index].isArchived = true;
        notes[index].lastEdited = new Date().toISOString();
        resolve(notes[index]);
      } else {
        resolve(null);
      }
    }, 300);
  });
}


