import { Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from 'recharts';

const data01 = [
  { hour: '7 AM', index: 1, value: 160 },
  { hour: '11 AM', index: 1, value: 130 },
  { hour: '3 PM', index: 1, value: 0 },
  { hour: '7 PM', index: 1, value: 130 },
  { hour: '11 PM', index: 1, value: 180 },
  { hour: '3 AM', index: 1, value: 180 },
];

const data02 = [
  { hour: '7 AM', index: 1, value: 350 },
  { hour: '11 AM', index: 1, value: 50 },
  { hour: '3 PM', index: 1, value: 390 },
  { hour: '7 PM', index: 1, value: 170 },
  { hour: '11 PM', index: 1, value: 20 },
  { hour: '3 AM', index: 1, value: 160 },
];

const parseDomain = () => [
  0,
  Math.max(
    Math.max.apply(
      null,
      data01.map((entry) => entry.value)
    ),
    Math.max.apply(
      null,
      data02.map((entry) => entry.value)
    )
  ),
];

const renderTooltip = (props) => {
  const { active, payload } = props;

  if (active && payload && payload.length) {
    const data = payload[0] && payload[0].payload;

    return (
      <div
        style={{
          backgroundColor: '#fff',
          border: '1px solid #999',
          margin: 0,
          padding: 10,
        }}
      >
        <p>{data.hour}</p>
        <p>
          <span>value: </span>
          {data.value}
        </p>
      </div>
    );
  }

  return null;
};

export default function Calendar() {
  const domain = parseDomain();
  const range = [16, 400];

  return (
    <div>
      <ScatterChart
        width={800}
        height={60}
        margin={{
          top: 10,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <XAxis
          type='category'
          dataKey='hour'
          interval={0}
          tick={{ fontSize: 0 }}
          tickLine={{ transform: 'translate(0, -6)' }}
        />
        <YAxis
          type='number'
          dataKey='index'
          name='sunday'
          height={10}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: 'Sunday', position: 'insideRight' }}
        />
        <ZAxis type='number' dataKey='value' domain={domain} range={range} />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={data01} fill='#8884d8' />
      </ScatterChart>

      <ScatterChart
        width={800}
        height={60}
        margin={{
          top: 10,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <XAxis
          type='category'
          dataKey='hour'
          name='hour'
          interval={0}
          tick={{ fontSize: 0 }}
          tickLine={{ transform: 'translate(0, -6)' }}
        />
        <YAxis
          type='number'
          dataKey='index'
          height={10}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: 'Monday', position: 'insideRight' }}
        />
        <ZAxis type='number' dataKey='value' domain={domain} range={range} />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={data02} fill='#8884d8' />
      </ScatterChart>

      <ScatterChart
        width={800}
        height={60}
        margin={{
          top: 10,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <XAxis
          type='category'
          dataKey='hour'
          name='hour'
          interval={0}
          tick={{ fontSize: 0 }}
          tickLine={{ transform: 'translate(0, -6)' }}
        />
        <YAxis
          type='number'
          dataKey='index'
          height={10}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: 'Tuesday', position: 'insideRight' }}
        />
        <ZAxis type='number' dataKey='value' domain={domain} range={range} />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={data01} fill='#8884d8' />
      </ScatterChart>

      <ScatterChart
        width={800}
        height={60}
        margin={{
          top: 10,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <XAxis
          type='category'
          dataKey='hour'
          name='hour'
          interval={0}
          tick={{ fontSize: 0 }}
          tickLine={{ transform: 'translate(0, -6)' }}
        />
        <YAxis
          type='number'
          dataKey='index'
          height={10}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: 'Wednesday', position: 'insideRight' }}
        />
        <ZAxis type='number' dataKey='value' domain={domain} range={range} />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={data02} fill='#8884d8' />
      </ScatterChart>

      <ScatterChart
        width={800}
        height={60}
        margin={{
          top: 10,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <XAxis
          type='category'
          dataKey='hour'
          name='hour'
          interval={0}
          tick={{ fontSize: 0 }}
          tickLine={{ transform: 'translate(0, -6)' }}
        />
        <YAxis
          type='number'
          dataKey='index'
          height={10}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: 'Thursday', position: 'insideRight' }}
        />
        <ZAxis type='number' dataKey='value' domain={domain} range={range} />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={data01} fill='#8884d8' />
      </ScatterChart>

      <ScatterChart
        width={800}
        height={60}
        margin={{
          top: 10,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <XAxis
          type='category'
          dataKey='hour'
          name='hour'
          interval={0}
          tick={{ fontSize: 0 }}
          tickLine={{ transform: 'translate(0, -6)' }}
        />
        <YAxis
          type='number'
          dataKey='index'
          height={10}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: 'Friday', position: 'insideRight' }}
        />
        <ZAxis type='number' dataKey='value' domain={domain} range={range} />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={data02} fill='#8884d8' />
      </ScatterChart>

      <ScatterChart
        width={800}
        height={60}
        margin={{
          top: 10,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <XAxis
          type='category'
          dataKey='hour'
          name='hour'
          interval={0}
          tickLine={{ transform: 'translate(0, -6)' }}
        />
        <YAxis
          type='number'
          dataKey='index'
          height={10}
          width={80}
          tick={false}
          tickLine={false}
          axisLine={false}
          label={{ value: 'Saturday', position: 'insideRight' }}
        />
        <ZAxis type='number' dataKey='value' domain={domain} range={range} />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          wrapperStyle={{ zIndex: 100 }}
          content={renderTooltip}
        />
        <Scatter data={data01} fill='#8884d8' />
      </ScatterChart>
    </div>
  );
}
