import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // We define the sidebar for our book manually
  bookSidebar: [
    'index', // This will be the landing page of the book
    {
      type: 'category',
      label: 'Part 1: The Foundations of Physical AI',
      items: [
        'part1-foundations/chapter1-principles',
        'part1-foundations/chapter2-landscape',
        'part1-foundations/chapter3-sensors',
      ],
    },
    {
      type: 'category',
      label: 'Part 2: The Robotic Nervous System',
      items: [
        'part2-ros/chapter4-core-concepts',
        'part2-ros/chapter5-packages',
        'part2-ros/chapter6-urdf',
      ],
    },
    {
      type: 'category',
      label: 'Part 3: Digital Twins & Simulation',
      items: [
        'part3-simulation/chapter7-gazebo',
        'part3-simulation/chapter8-isaac-sim',
        'part3-simulation/chapter9-perception',
      ],
    },
    {
      type: 'category',
      label: 'Appendices',
      items: ['appendix-hardware-guide'],
    },
  ],
};

export default sidebars;