import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData } from "./actions";
import Navbar from "./common/NavBar";
import Banner from "./common/Banner";
import { Layout, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Footer from "./common/Footer";

class Main extends React.Component {
  constructor(args){
    super(args);
    this.state = {
      view : [],
      clicked : false
    }
  }

  componentDidMount() {
   this.props.requestApiData();
  }

  // componentDidUpdate(){
  //   let check = this.props.data;
  //   if(this.state.clicked == true)
  //   this.setState({
  //     view : check.data
  //   })
  // }

  handleMoreData(){
    this.setState({
      clicked : true
    })
  }

  person = (coindata, i) =>
    <div key={coindata.id.value}>
      <h1>
        {coindata.rank}
      </h1>
      <h1>
        {coindata.symbol}
      </h1>
      <h1>
        {coindata.symbol}
      </h1>
    </div>;


  render() {
    const { data = [] } = this.props.data;
    const { view, clicked } = this.state;
    const trimmed = data.slice(0,50);
    
    const columns = [
      {
        title: 'Rank',
        dataIndex: 'rank',
        rowScope: 'row',
        sorter : true,
        align:'center',
        width : 100,

      },
      {
        title: 'Name',
        dataIndex: 'name',
        align : 'left',
        width : "25%",
        render: (text, record) => (
          <div className="icon-container"><img class="icon-images" src={`https://assets.coincap.io/assets/icons/${record.symbol.toLowerCase()}@2x.png`}/> {record.name} <br/> 
          {record.symbol} <br/>
           </div>
        )
        
      },{
        title: 'Price',
        dataIndex: 'priceUsd',
        align : 'right',
        ellipsis : true,
        width : "12%",
      },{
        title: 'Market Cap',
        dataIndex: 'marketCapUsd',
        align : 'right',
        ellipsis : true

      },{
        title: 'VWAP(24Hr)',
        dataIndex: 'vwap24Hr',
        align : 'right',
        ellipsis : true
      },
      {
        title: 'Supply',
        dataIndex: 'supply',
        align : 'right',
        ellipsis : true

      },
      {
        title: 'Volume(24hr)',
        dataIndex: 'volumeUsd24Hr',
        align : 'right',
        ellipsis : true

      },
      {
        title: 'Change(24hr)',
        dataIndex: 'changePercent24Hr',
        align : 'right',
        ellipsis : true
      }
    ];


    return data.length
      ? (
        <Layout>
          <div className="table-container">
            <Navbar/>
            <Banner/>
            {/* <span>
                {data.map(this.person)}
            </span> */}
            <div className="table-styling">
              {clicked ? 
            <Table
            dataSource={data} 
            columns={columns}
            pagination={false}
            ></Table> : 
            <Table
            dataSource={trimmed} 
            columns={columns}
            pagination={false}
            ></Table>
              }
            {clicked ? null : 
            <div className="more-button-container">
              <button className="view-more-button" onClick={this.handleMoreData.bind(this)}>View More</button>
            </div>
            }
            </div>
            <Footer/>
          </div>
          </Layout>
      )
      : <h1>loading...</h1>;
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);