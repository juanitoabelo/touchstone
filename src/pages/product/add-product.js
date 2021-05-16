import Select from '@paljs/ui/Select';
import { InputGroup } from '@paljs/ui/Input';
import { Card, CardBody } from '@paljs/ui/Card';
import { ButtonLink } from '@paljs/ui/Button';
import { Button } from '@paljs/ui/Button';
import { navigate } from 'gatsby';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO';
import axios from 'axios';
import { Container } from '@material-ui/core';


const Input = styled(InputGroup)`
  margin-bottom: 10px;
`;
const SelectStyled = styled(Select)`
  margin-bottom: 1rem;
`;

const selectCompanyOption = [
  { label: 'By' },
  { value: '12', label: 'Advanced Recovery Systems' },
  { value: '1', label: 'Apex Notes' },
  { value: '20', label: 'At The Crossroads' },
  { value: '3', label: 'Cedar Ridge' },
  { value: '22', label: 'Clearview Girls Academy' },
  { value: '2', label: 'Clearview Horizon' },
  { value: '7', label: 'Elevations' },
  { value: '21', label: 'Elk Mountain' },
  { value: '10', label: 'Family First' },
  { value: '6', label: 'Family Positive Impact' },
  { value: '16', label: 'Gulf Coast Treatment Center' },
  { value: '13', label: 'Journey Pure' },
  { value: '9', label: 'Makana' },
  { value: '4', label: 'MiBoSpi Recovery' },
  { value: '17', label: 'Newport Academy ' },
  { value: '14', label: 'Palm Shores Behavioral Health Center' },
  { value: '8', label: 'Red Frog' },
  { value: '19', label: 'Second Chances of Southern Utah' },
  { value: '23', label: 'Soulegria' },
  { value: '5', label: 'Therapy Insider' },
  { value: '18', label: 'Visions Teen Center' },
  { value: '11', label: 'Voyage Recovery' },
  { value: '15', label: 'Voyage Recovery Center' },
];

const onSearchProduct = () => {

}
const onChangeStatus = (e) => {
  // v will be true or false
  console.log('Change Status: '+e.target);
  // alert('Change Status'+ e);
}
export default function AddProduct() {
  return (
    <>
      <SEO title="ADD PRODUCT/SERVICE" />
      <div className="content-wrapper px-4 py-4">
        <Card>
            <CardBody>

              <Container>
                  <Row>
                    <Col breakPoint={{ xs: 12 }}>
                      <h1 className="text-center mb-5">ADD PRODUCT/SERVICE</h1>
                    </Col>
                  </Row>

                  <Row className="justify-content-center align-items-center mb-5">
                    <Col className="col-lg-12">
                    <form>
                        <Row>
                          <Col breakPoint={{ xs: 12 }} >
                          <label htmlFor="ProductName">Product/Service Name</label>
                            <Input fullWidth size="Small" className="notes">
                              <input type="text" placeholder="" id="ProductName" className="ProductName" name="ProductName" onChange ={onChangeStatus.bind(this)}/>
                            </Input>
                          </Col>
                          <Col breakPoint={{ xs: 12 }}>
                            <label htmlFor="CompanyID">Company</label>
                            <SelectStyled options={selectCompanyOption}  placeholder="Select" id="CompanyID" name="CompanyID" onChange ={onChangeStatus.bind(this)} />
                          </Col>
                          <Col breakPoint={{ xs: 12 }} breakPoint={{ md: 12 }}>
                            <label htmlFor="ProductDescription">Product/Service Description</label>
                            <Input fullWidth shape="Round">
                              <textarea rows={5} placeholder="" name="ProductDescription" id="ProductDescription"/>
                            </Input>
                          </Col>
                          <Col breakPoint={{ xs: 12 }} breakPoint={{ md: 6 }}></Col>
                          <Col breakPoint={{ xs: 12 }} breakPoint={{ md: 6 }}>
                              <Button status="Success" type="button" shape="SemiRound" onClick={onSearchProduct} fullWidth>Save</Button>
                          </Col>
                      </Row>
                            
                    </form> 
                    </Col>
                  </Row>

                </Container>

            </CardBody>
          </Card>
        </div>
    </>
  );
}