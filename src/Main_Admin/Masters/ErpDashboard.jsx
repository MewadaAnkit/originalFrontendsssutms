import React,{useEffect} from "react";
import { Chart } from "react-google-charts";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import AdminDashboard from "./Admin_Dashboard/AdminDashboard";






const dataOld = [
  ["Name", "Popularity"],
  ["Cesar", 250],
  ["Rachel", 4200],
  ["Patrick", 2900],
  ["Eric", 8200],
];

const dataNew = [
  ["Name", "Popularity"],
  ["Cesar", 370],
  ["Rachel", 600],
  ["Patrick", 700],
  ["Eric", 1500],
];

export const diffdata = {
  old: dataOld,
  new: dataNew,
};

export const data2 = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], 
];

export const options2 = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
};

export const data3 = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2020", 1000, 400, 200],
  ["2021", 1170, 460, 250],
  ["2022", 660, 1120, 300],
  ["2023", 1030, 540, 350],
];

export const options3 = {
  chart: {
    title: "Student Admission In",
  },
};

function ErpDashboard() {
  useEffect(() => {
   
    let root = am5.Root.new("chartdiv");

  
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX: true,
      paddingLeft: 0,
      paddingRight: 1
    }));

    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

   
    let xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30,
      minorGridEnabled: true
    });

    xRenderer.labels.template.setAll({
      rotation: 0,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingTop: 10,
    });

    xRenderer.grid.template.setAll({
      location: 1
    });

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      maxDeviation: 0.3,
      categoryField: "year",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));

    let yRenderer = am5xy.AxisRendererY.new(root, {
      strokeOpacity: 0.1
    });

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0.3,
      renderer: yRenderer
    }));

   
    let series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      sequencedInterpolation: true,
      categoryXField: "year",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}"
      })
    }));

    // Set column width and color
    series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeWidth: 1, // Set the line width
      strokeOpacity: 1,
      fillOpacity: 0.7
    });

    series.set("column.width", am5.percent(50)); 

    series.columns.template.adapters.add("fill", function (fill, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    // Set data
    let data = [
   
      { year: "2011", value: 2025 },
      { year: "2012", value: 2025 }, { year: "2013", value: 2025 },
      { year: "2014", value: 2025 },
      { year: "2015", value: 2025 },

      { year: "2016", value: 2025 },
      { year: "2017", value: 1882 },
      { year: "2018", value: 1809 },
      { year: "2019", value: 1322 },
      { year: "2020", value: 1122 },
      { year: "2021", value: 1114 },
      { year: "2022", value: 984 },
      { year: "2023", value: 711 },
    ];

    xAxis.data.setAll(data);
    series.data.setAll(data);

    
    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      if (root) {
        root.dispose();
      }
    };
  }, []); 
  
  return (
    <>
     <AdminDashboard/>
        <style>
        {
          `
        @import url( 
          "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"); 
            
          * { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box; 
            font-family: "Poppins", sans-serif; 
          } 
          :root { 
            
            --primary-color: #4b49ac; 
            --secondary-color: #0c007d; 
            --Border-color: #3f0097; 
            --one-use-color: #3f0097; 
            --two-use-color: #5500cb; 
          } 
         
          .main-container { 
            display: flex; 
            width: 100vw; 
            position: relative; 
            top: 70px; 
            z-index: 1; 
          } 
          
            
          .main { 
            height: calc(100vh - 70px); 
            width: 100%; 
            overflow-y: scroll; 
            overflow-x: hidden; 
            padding: 40px 30px 30px 30px; 
          } 
            
          
          .box-container { 
            display: flex; 
            justify-content: space-evenly; 
            align-items: center; 
            flex-wrap: wrap; 
            gap: 50px; 
          } 
      
            
          
          .box { 
            height: 130px; 
            width: 230px; 
            border-radius: 20px; 
            box-shadow: 3px 3px 10px rgba(0, 30, 87, 0.751); 
            padding: 20px; 
            display: flex; 
            align-items: center; 
            justify-content: space-around; 
            cursor: pointer; 
            transition: transform 0.3s ease-in-out; 
          } 
          .box:hover { 
            transform: scale(1.08); 
          } 
            
          .box:nth-child(1) { 
            background-color: var(--one-use-color); 
          } 
          .box:nth-child(2) { 
            background-color: var(--two-use-color); 
          } 
          .box:nth-child(3) { 
            background-color: var(--one-use-color); 
          } 
          .box:nth-child(4) { 
            background-color: var(--two-use-color); 
          } 
            
          .box img { 
            height: 50px; 
          } 
          .box .text { 
            color: white; 
          } 
          .topic { 
            font-size: 13px; 
            font-weight: 400; 
            letter-spacing: 1px; 
          } 
            
          .topic-heading { 
            font-size: 30px; 
            letter-spacing: 3px; 
          } 
            
          .report-container { 
            min-height: 300px; 
            max-width: 1200px; 
            margin: 70px auto 0px auto; 
           
            border-radius: 30px; 
            box-shadow: 3px 3px 10px rgb(188, 188, 188); 
            padding: 0px 20px 20px 20px; 
          } 
        
            
          @media screen and (max-width: 850px) { 
            
            .main { 
              padding: 40px 30px 30px 60px; 
            } 
           }`
        }
      </style>



      <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width,  
               initial-scale=1.0"
    />
  
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="responsive.css" />
   
    <div className="main-container">
    
      <div className="main">
       
        <div className="box-container">
          <div className="box box1">
            <div className="text">
              <h2 className="topic-heading">2255</h2>
              <h2 className="topic">Registered</h2>
            </div>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
              alt="Views"
            />
          </div>
          <div className="box box2">
            <div className="text">
              <h2 className="topic-heading">1420</h2>
              <h2 className="topic">College Allotted</h2>
            </div>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png"
              alt="likes"
            />
          </div>
          <div className="box box3">
            <div className="text">
              <h2 className="topic-heading">1580</h2>
              <h2 className="topic">Tuition Fee Paid</h2>
            </div>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
              alt="comments"
            />
          </div>
          <div className="box box4">
            <div className="text">
              <h2 className="topic-heading">1</h2>
              <h2 className="topic">Today Registered</h2>
            </div>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png"
              alt="published"
            />
          </div>
          
        </div>
       
      </div>
    </div>


    

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
      <>
<div
  className="shadow p-3 bg-body rounded"
  style={{ width: "50%", height: "500px" ,marginLeft:'100px',marginTop:'-25%'}}
>
  <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
</div>
</>
      
  
        <div
          className="row2 shadow p-3 bg-body rounded"
          style={{
            margin: "20px",
            width: "100%",
            maxWidth: "500px",
            height: "415px",
            backgroundColor: "#fff",
            marginTop:'-33%',
            marginLeft:'950px'
          }}
        >
          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data2}
            options={options2}
          />
        </div>
       

      {/* /////////////////////////////////////////////////////////////////////////////////////// */}
     

    </>
  );
}

export default ErpDashboard;

