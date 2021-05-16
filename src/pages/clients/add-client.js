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

const ErrorStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  small {
    margin-bottom: 3rem;
  }
  h1 {
    margin-bottom: 0.5rem;
  }
  a {
    max-width: 20rem;
  }
`;


const selectCompaignOption = [
  { value: '2', label: 'Apex Clients' },
  { value: '1', label: 'Apex Leads' },
  { value: '37', label: 'ATC Leads' },
  { value: '4', label: 'Cedar Ridge Leads' },
  { value: '39', label: 'Clearview Girls Academy Leads' },
  { value: '7', label: 'Elevations Leads'},
];

const selectAssignedRepresentativeOptions = [
  { value: '0', label: 'None' },
  { value: '189', label: 'Debbie Celani' },
  { value: '317', label: 'Jason Thielbahr' },
  { value: '321', label: 'Jason Thielbahr' },
  { value: '26', label: 'Kevin  Johnson' },
  { value: '322', label: 'Mary Louise Thielbahr' },
  { value: '323', label: 'Mike Linderman MA LCPC' },
  { value: '276', label: 'Paula Riggs' },
  { value: '272', label: 'Tara Heaton' },
];

const selectCardTypeOptions = [
  { value: 'Visa', label: 'Visa' },
  { value: 'MASTERCARD', label: 'Master Card' },
  { value: 'Discover', label: 'Discover' },
  { value: 'AMEX', label: 'American Express' },
];
const selectExpMonthOptions = [
  { value: '01', label: '01' },
  { value: '02', label: '02' },
  { value: '03', label: '03' },
  { value: '04', label: '04' },
  { value: '05', label: '05' },
  { value: '06', label: '06' },
  { value: '07', label: '07' },
  { value: '08', label: '08' },
  { value: '09', label: '09' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
];
const selectExpYearOptions= [
  { value: '2011', label: '2011' },
  { value: '2012', label: '2012' },
  { value: '2013', label: '2013' },
  { value: '2014', label: '2014' },
  { value: '2015', label: '2015' },
  { value: '2016', label: '2016' },
  { value: '2017', label: '2017' },
  { value: '2018', label: '2018' },
  { value: '2019', label: '2019' },
  { value: '2020', label: '2020' },
  { value: '2021', label: '2021' },
  { value: '2022', label: '2022' },
];

const onSearchProduct = () => {

}
const onChangeStatus = (e) => {
  // v will be true or false
  console.log('Change Status: '+e.target);
  // alert('Change Status'+ e);
}
export default function AddClient() {
  return (
    <>
      <SEO title="ADD USER" />
      <div className="content-wrapper px-4 py-4">

      
      <Card>
          <CardBody>

            <Container>
                <Row>
                  <Col breakPoint={{ xs: 12 }}>
                    <h1 className="text-center mb-5">ADD CLIENT</h1>
                  </Col>
                </Row>

                <Row className="justify-content-center align-items-center mb-5">
                  <Col className="col-lg-12">
                  <form>
                      <Row>
                        <Col breakPoint={{ xs: 12 }}>
                          <label htmlFor="CampaignID">Campaign</label>
                          <SelectStyled options={selectCompaignOption}  placeholder="Select" id="CampaignID" name="CampaignID" onChange ={onChangeStatus.bind(this)} />
                        </Col>

                        <Col breakPoint={{ xs: 12 }}>
                            <label htmlFor="FirstName">First Name</label>
                            <Input fullWidth size="Medium" className="FirstName">
                            <input type="text" placeholder="" id="FirstName" name="FirstName" onChange ={onChangeStatus.bind(this)}/>
                          </Input>
                        </Col>

                        <Col breakPoint={{ xs: 12 }}>
                        <label htmlFor="LastName">Last Name</label>
                          <Input fullWidth size="Medium" className="LastName">
                            <input type="text" placeholder="" id="LastName" name="LastName" onChange ={onChangeStatus.bind(this)}/>
                          </Input>
                        </Col>

                        <Col breakPoint={{ xs: 12 }}>
                        <label htmlFor="EmailAddress">Email</label>
                          <Input fullWidth size="Medium" className="EmailAddress">
                            <input type="email" placeholder="" id="EmailAddress" name="EmailAddress" onChange ={onChangeStatus.bind(this)}/>
                          </Input>
                        </Col>

                        <Col breakPoint={{ xs: 12 }}>
                        <label htmlFor="HomePhone">Home Phone</label>
                          <Input fullWidth size="Medium" className="HomePhone">
                            <input type="text" placeholder="" id="HomePhone" name="HomePhone" onChange ={onChangeStatus.bind(this)}/>
                          </Input>
                        </Col>

                        <Col breakPoint={{ xs: 12 }}>
                        <label htmlFor="BillAddress">Billing Address</label>
                          <Input fullWidth size="Medium" className="BillAddress">
                            <input type="text" placeholder="" id="BillAddress" name="BillAddress" onChange ={onChangeStatus.bind(this)}/>
                          </Input>
                        </Col>
                        <Col breakPoint={{ xs: 12 }}>
                        <label htmlFor="BillCity">Billing City</label>
                          <Input fullWidth size="Medium" className="BillCity">
                            <input type="text" placeholder="" id="BillCity" name="BillCity" onChange ={onChangeStatus.bind(this)}/>
                          </Input>
                        </Col>
                        <Col breakPoint={{ xs: 12 }}>
                        <label htmlFor="BillState">Billing State</label>
                          <Input fullWidth size="Medium" className="BillState">
                            <input type="text" placeholder="" id="BillState" name="BillState" onChange ={onChangeStatus.bind(this)}/>
                          </Input>
                        </Col>
                        <Col breakPoint={{ xs: 12 }}>
                        <label htmlFor="BillZip">Billing Zip</label>
                          <Input fullWidth size="Medium" className="BillZip">
                            <input type="text" placeholder="" id="BillZip" name="BillZip" onChange ={onChangeStatus.bind(this)}/>
                          </Input>
                        </Col>
                        <Col breakPoint={{ xs: 12 }}>
                        <label htmlFor="BillCountry">Billing Country</label>
                          <Input fullWidth size="Medium" className="BillCountry">
                            <input type="text" placeholder="" id="BillCountry" name="BillCountry" onChange ={onChangeStatus.bind(this)}/>
                          </Input>
                        </Col>
                        <Col breakPoint={{ xs: 12 }}>
                          <label htmlFor="CardType">Card Type</label>
                          <SelectStyled options={selectCardTypeOptions}  placeholder="Select" id="CardType" name="CardType" onChange ={onChangeStatus.bind(this)} />
                        </Col>
                        <Col breakPoint={{ xs: 12 }}>
                        <label htmlFor="CardNum">Card Number</label>
                          <Input fullWidth size="Medium" className="CardNum">
                            <input type="text" placeholder="" id="CardNum" name="CardNum" onChange ={onChangeStatus.bind(this)}/>
                          </Input>
                        </Col>
                        <Col breakPoint={{ xs: 12 }}>
                        <label htmlFor="CardCode">CVV</label>
                          <Input fullWidth size="Medium" className="CardCode">
                            <input type="text" placeholder="" id="CardCode" name="CardCode" onChange ={onChangeStatus.bind(this)}/>
                          </Input>
                        </Col>
                        <Col breakPoint={{ xs: 12 }} breakPoint={{ xs: 3 }}> 
                          <label htmlFor="ExpMonth">Expiration Date</label>
                          <SelectStyled options={selectExpMonthOptions}  placeholder="Select Month" id="ExpMonth" name="ExpMonth" onChange ={onChangeStatus.bind(this)} />
                        </Col>
                        <Col breakPoint={{ xs: 12 }} breakPoint={{ xs: 3 }}> 
                          <label htmlFor="ExpYear">&nbsp;</label>
                          <SelectStyled options={selectExpYearOptions}  placeholder="Select Year" id="ExpYear" name="ExpYear" onChange ={onChangeStatus.bind(this)} />
                        </Col>
                        <Col breakPoint={{ xs: 12 }}>
                          <label htmlFor="CSUserID">Assigned Representative</label>
                          <SelectStyled options={selectAssignedRepresentativeOptions}  placeholder="Select" id="CSUserID" name="CSUserID" onChange ={onChangeStatus.bind(this)} />
                        </Col>

                        <Col breakPoint={{ xs: 12 }} breakPoint={{ md: 3 }} >
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