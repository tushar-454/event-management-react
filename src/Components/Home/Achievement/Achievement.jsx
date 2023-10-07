import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from 'recharts';
import SectionHead from '../../ReusableUI/SectionHead';

const data = [
  {
    subject: 'Event Excellence Awards',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Client Success Storie',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Years of Event Excellence',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Event Innovation Accolades',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Team Achievement',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Partnership Milestones',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function Achievement() {
  return (
    <div className='w-full bg-[#87ceeb09] py-4'>
      <div className='mx-auto max-w-screen-2xl px-4'>
        <SectionHead
          title='Our Achievements'
          subTitle='Building Success, One Event at a Time: Our Achievements and Milestones in Crafting Unforgettable Experiences for Our Valued Clients.'
        />
        <div className='grid content-center justify-center'>
          <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={700}
            height={500}
            data={data}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey='subject' />
            <PolarRadiusAxis />
            <Radar
              name='Mike'
              dataKey='A'
              stroke='#8884d8'
              fill='#8884d8'
              fillOpacity={0.6}
            />
          </RadarChart>{' '}
        </div>
      </div>
    </div>
  );
}
