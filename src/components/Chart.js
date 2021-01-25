import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

const Chart = ({ languages }) => {
    console.log("languages in chart", typeof languages)
    console.log("languages in chart", languages.length)
    let makeLanguageArray = []
    let makeLanguageCountArray = []
    for (let i = 0; i < languages.length; i++) {
        console.log("i type number repos", typeof languages[i][1])
        makeLanguageArray.push(languages[i][0])
        makeLanguageCountArray.push(languages[i][1])
    }
    console.log("makeLangArr", makeLanguageArray)
    console.log("makeLangCountArr", makeLanguageCountArray)
    let testData = {
        labels: makeLanguageArray,
        datasets: [{
            label:"Number of Repos",
            data:makeLanguageCountArray // number of languages
        }]
    }

return (
    <div className="chart">
        <Bar
          data={testData}
          options={{
              maintainAspectRatio: false,
            }}
            ></Bar>
      </div>
    );
}

export default Chart;

// this.state = {
//     chartData: {
//         labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
//         datasets: [
//             {
//                 label: 'Population',
//                 data: [
//                     617594,
//                     181045,
//                     106519,
//                     105162,
//                     95072
//                 ],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.6)',
//                     'rgba(54, 162, 235, 0.6)',
//                     'rgba(255, 206, 86, 0.6)',
//                     'rgba(75, 192, 192, 0.6)',
//                     'rgba(153, 102, 255, 0.6)',
//                     'rgba(255, 159, 64, 0.6)',
//                     'rgba(255, 99, 132, 0.6)',
//                 ]
//             }
//         ]
//     }
// }