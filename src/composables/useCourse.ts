import type { IGetCourseResponse } from '@/models/course';

export default function useCourse() {
  const data: IGetCourseResponse[] = [
    {
      Title: 'Array',
      Credit: 'Bro Code',
      VideoLink: 'https://www.youtube.com/embed/lfmg-EJ8gm4?si=POk6UMMtclWkUgj3',
      Description: ' Web Dev Series',
      CategoryId: null,
      SubCategoryId: null
    },
    {
      Title: 'Array',
      Credit: 'Bro Code',
      VideoLink: 'https://www.youtube.com/embed/c2M-rlkkT5o?si=XqBe2irIJ4-dOJOP',
      Description:
        'Working with arrays in JavaScript used to be a pain with barely any support for complex array operations. Fast forward to today, though, and there are tons of amazing JavaScript array methods available to us. In this video I will be covering the 8 most important array methods in JavaScript.',
      CategoryId: null,
      SubCategoryId: null
    },
    {
      Title: 'Array',
      Credit: 'Bro Code',
      VideoLink: 'https://www.youtube.com/embed/lfmg-EJ8gm4?si=POk6UMMtclWkUgj3',
      Description: ' Web Dev Series',
      CategoryId: null,
      SubCategoryId: null
    },
    {
      Title: 'A flexbox trick to improve text wrapping',
      Credit: 'Kevin Powell',
      VideoLink: 'https://www.youtube.com/embed/3ugXM3ZDUuE?si=ODCUM8qHkXmi25he',
      Description:
        'Working with arrays in JavaScript used to be a pain with barely any support for complex array operations. Fast forward to today, though, and there are tons of amazing JavaScript array methods available to us. In this video I will be covering the 8 most important array methods in JavaScript.',
      CategoryId: null,
      SubCategoryId: null
    },
    {
      Title: 'Array',
      Credit: 'Bro Code',
      VideoLink: 'https://www.youtube.com/embed/lfmg-EJ8gm4?si=POk6UMMtclWkUgj3',
      Description: ' Web Dev Series',
      CategoryId: null,
      SubCategoryId: null
    },
    {
      Title: 'Array',
      Credit: 'Bro Code',
      VideoLink: 'https://www.youtube.com/embed/c2M-rlkkT5o?si=XqBe2irIJ4-dOJOP',
      Description:
        'Working with arrays in JavaScript used to be a pain with barely any support for complex array operations. Fast forward to today, though, and there are tons of amazing JavaScript array methods available to us. In this video I will be covering the 8 most important array methods in JavaScript.',
      CategoryId: null,
      SubCategoryId: null
    }
  ];

  return { data };
}
