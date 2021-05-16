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

const selectCompaignOption = [
  { value: '2', label: 'Apex Clients' },
  { value: '1', label: 'Apex Leads' },
  { value: '37', label: 'ATC Leads' },
  { value: '4', label: 'Cedar Ridge Leads' },
  { value: '39', label: 'Clearview Girls Academy Leads' },
  { value: '7', label: 'Elevations Leads'},
];

const selectSourceOption = [
  { value: '6', label: 'Phone Call' },
  { value: '4', label: 'Missed Call' },
  { value: '5', label: 'Form Fill' },
];

const selectStatusOption = [
  { value: 'Active', label: 'Active' },
  { value: 'Referred', label: 'Referred' },
  { value: 'Deactivated', label: 'Deactivated' },
  { value: 'Business Admin', label: 'Business Admin'},
];

const selectInitialRepresentativeOptions = [
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

const onSearchProduct = () => {

}
const onChangeStatus = (e) => {
  // v will be true or false
  console.log('Change Status: '+e.target);
  // alert('Change Status'+ e);
}
export default function AddLead() {
  return (
    <>
      <SEO title="ADD USER" />
      <div className="content-wrapper px-4 py-4">

      
      <Card>
          <CardBody>

            <Container>
                <Row>
                  <Col breakPoint={{ xs: 12 }}>
                    <h1 className="text-center mb-5">ADD LEAD</h1>
                  </Col>
                </Row>

                <Row className="justify-content-center align-items-center mb-5">
                  <Col className="col-lg-12">
                  <form>
                      <Row>
                        <Col breakPoint={{ xs: 12 }}>
                          <label htmlFor="CampaignID">Where is lead from?</label>
                          <SelectStyled options={selectCompaignOption}  placeholder="Select" id="CampaignID" name="CampaignID" onChange ={onChangeStatus.bind(this)} />
                        </Col>
                        <Col breakPoint={{ xs: 12 }} >
                          <label htmlFor="InitialDisposition">Source</label>
                          <SelectStyled options={selectSourceOption}  placeholder="Select" id="InitialDisposition" name="InitialDisposition" onChange ={onChangeStatus.bind(this)} />
                        </Col>
                        <Col breakPoint={{ xs: 12 }} >
                          <label htmlFor="Status">Status</label>
                          <SelectStyled options={selectStatusOption}  placeholder="Select" id="Status" name="Status" onChange ={onChangeStatus.bind(this)} />
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
                          <label htmlFor="CSUserID">Initial Representative</label>
                          <SelectStyled options={selectInitialRepresentativeOptions}  placeholder="Select" id="CSUserID" name="CSUserID" onChange ={onChangeStatus.bind(this)} />
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