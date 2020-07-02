import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';


class RadarChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
             chartData: {
                labels: ['Maestro', 'Giuseppe', 'Vincenzo', 'Maham','Michele'],
                datasets: [{
                    label: 'Grafico di Prova',
                    data: [
                        99,
                        10,
                        10,
                        10,
                        10,
                        0
                    ],
                    //backgroundColor:'green',
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                    ],
                   
                }]
            },
             
        };
    }



 render() {
    return (
        <div className='chart'>
            <Radar
                data={this.state.chartData}
                option= {{mantainaspectratio: false}}
            />
        </div>
    )
 }
}

export default RadarChart;