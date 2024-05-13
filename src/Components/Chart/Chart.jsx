import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const Chart = ({setHover}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const dom = chartRef.current;
    const myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });

    const handleMousemove = (params) => {
        if (params.data && params.data.name) {
            setHover(params.data.name)
        //   console.log('Hovered over:', params.data.name);
        }
      };
  
      myChart.on('mousemove', handleMousemove);

    const option = {
    //   tooltip: {
    //     trigger: 'item'
    //   },
    //   legend: {
    //     top: '5%',
    //     left: 'center'
    //   },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['75%', '88%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 30,
              fontWeight: '400',
              color:"white",
              background:"rgba(42, 38, 88, 1)"
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 2303, name: 'Coal' ,itemStyle: { color: 'rgba(58,163,69,1)' ,selectedOffset:10 }},
            { value: 1243, name: 'Aluminium' ,itemStyle: { color: 'rgba(221, 184, 52, 1)' }},
            { value: 398, name: 'Iron Ore',itemStyle: { color: 'rgba(66, 174, 235, 1)' } }
            // { value: 484, name: 'Union Ads' },
            // { value: 300, name: 'Video Ads' }
          ],
          graphic: [
            {
              type: 'rect',
              left: 'center',
              top: 'middle',
              shape: {
                width: '90%',
                height: '90%'
              },
              style: {
                fill: '#f5f5f5', // Background color
                stroke: '#fff', // Border color
                lineWidth: 1
              }
            }
          ]

        }
      ]
    };

    myChart.setOption(option);

    // myChart.dispatchAction({
    //     type: 'highlight',
    //     seriesIndex: 0,
    //     dataIndex: 0
    //   });

    // Resize the chart when the window resizes
    window.addEventListener('resize', () => {
      myChart.resize();
    });

    return () => {
      // Cleanup when the component unmounts
      myChart.dispose();
      window.removeEventListener('resize', () => {
        myChart.resize();
      });
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '250px' ,position:"relative"}} />;
    {/* <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Your Custom Text Here</div> */}
  {/* </div> */}
};

export default Chart;
