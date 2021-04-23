import React from 'react';
import image1 from '../../assets/images/advanced-option.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/easy-customise.jpg';
import image4 from '../../assets/images/great-support.jpg';

import { Row, Col, } from 'antd';
import { Card } from 'antd';


function AppFeature() {
    return (
        <div className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Key Features and Benefits</h2>
                    <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
                </div>
            <Row gutter={16}>
              <Col className="customCard" span={8}>
                 <Card hoverable style={{ width: 380 }} bodyStyle={{ padding: 0 }}>
                    <img alt="Catapulta Web Development" width="100%" src={image1} />
                      <h3 className="customTextCard">Web Development</h3>   
                  </Card>
                </Col>
                <Col className="customCard " span={8}>
                <Card  hoverable style={{ width: 380 }} bodyStyle={{ padding: 0 }}>
                    <img alt="Catapulta Web Development" width="100%" src={image2} />
                    <h3 className="customTextCard">Web Development</h3>   
                  </Card>
                </Col>
                <Col className="customCard " span={8}>
                <Card  hoverable style={{ width: 380 }} bodyStyle={{ padding: 0 }}>
                    <img alt="Catapulta Web Development" width="100%" src={image3} />
                    <h3 className="customTextCard">Web Development</h3>   
                  </Card>
                </Col>
                <Col className="customCard " span={8}>
                <Card  hoverable style={{ width: 380 }} bodyStyle={{ padding: 0 }}>
                    <img alt="Catapulta Web Development" width="100%" src={image4} />
                    <h3 className="customTextCard">Web Development</h3>   
                  </Card>
                </Col>
                <Col className="customCard " span={8}>
                <Card  hoverable style={{ width: 380 }} bodyStyle={{ padding: 0 }}>
                    <img alt="Catapulta Web Development" width="100%" src={image1} />
                    <h3 className="customTextCard">Web Development</h3>   
                  </Card>
                </Col>
                <Col className="customCard " span={8}>
                <Card  hoverable style={{ width: 380 }} bodyStyle={{ padding: 0 }}>
                    <img alt="Catapulta Web Development" width="100%" src={image4} />
                    <h3 className="customTextCard">Web Development</h3>   
                  </Card>
                </Col>
            </Row>
            </div>
        </div>
        
    );
}

export default AppFeature;