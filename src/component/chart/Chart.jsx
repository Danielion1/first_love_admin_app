import './chart.scss'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import PropTypes from 'prop-types';


const colors = scaleOrdinal(schemeCategory10).range();

const data = [
    {
      name: 'JAN',
      num: 4000,
    },
    {
      name: 'FEB',
      num: 3000,
    },
    {
      name: 'MAR',
      num: 2000,
    },
    {
      name: 'APR',
      num: 2780,
    },
    {
      name: 'MAY',
      num: 1890,
    },
    {
      name: 'JUN',
      num: 2390,
    },
    {
      name: 'JUL',
      num: 3490,
    },
    {
        name: 'AUG',
        num: 1890,
      },
      {
        name: 'SEP',
        num: 2390,
      },
      {
        name: 'OCT',
        num: 3490,
      },
      {
        name: 'NOV',
        num: 4000,
      },
      {
        name: 'DEC',
        num: 5000,
      },
  ];

  const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};
export default function Chart({aspect, title}) {
  return (
    <div className='chart'>
        <div className="title">{title}</div>
       <ResponsiveContainer width="100%" aspect={aspect}>
        <BarChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="num" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
