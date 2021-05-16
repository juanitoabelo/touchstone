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

const selectTypeOptions = [
  { value: '1', label: 'Admin' },
  { value: '2', label: 'Group Home' },
  { value: '3', label: 'Pediatric Medical Practice' },
  { value: '4', label: 'Family Medical Practice' },
  { value: '5', label: 'Family Law Practice' },
  { value: '6', label: 'Family Advocacy' },
  { value: '7', label: 'Community Mental Health' },
  { value: '8', label: 'Mental Health Treatment Program' },
  { value: '9', label: 'Mental Health Service Provider' },
  { value: '10', label: 'Eating Disorder Program' },
  { value: '11', label: 'Educational Consultant Service' },
  { value: '12', label: 'Therapeutic Practice' },
  { value: '13', label: 'Counseling Center' },
  { value: '14', label: 'Chemical Dependency Counselor' },
  { value: '15', label: 'Substance Abuse Treatment Center' },
  { value: '16', label: 'Intense Outpatient Program' },
  { value: '17', label: 'Addiction Treatment' },
  { value: '18', label: 'Residential Treatment Center' },
  { value: '19', label: 'Christian Life Coach' },
  { value: '20', label: 'Christian Psychologist' },
  { value: '21', label: 'Christian Therapist' },
  { value: '22', label: 'Christian Counselor' },
  { value: '23', label: 'Therapeutic Boarding School' },
  { value: '24', label: 'Therapeutic Service/Program' },
  { value: '25', label: 'Homeschool Curriculum Provider' },
  { value: '26', label: 'Online/Virtual High School' },
  { value: '27', label: 'Christian Behavioral Health Assoc.' },
  { value: '28', label: 'Addictions Treatment Association' },
  { value: '29', label: 'Educational Association' },
  { value: '30', label: 'Therapeutic Services Association' },
  { value: '31', label: 'Behavioral Health Association' },
  { value: '32', label: 'Mental Health Association' },
  { value: '33', label: 'Social Media Group' },
  { value: '34', label: 'Internet Marketing Group' },
  { value: '35', label: 'Behavioral Health Provider' },
  { value: '36', label: 'Troubled Teen Counselor' },
  { value: '37', label: 'Behavioral Modification Program' },
  { value: '38', label: 'Wilderness Therapy Camp/Program' },
  { value: '39', label: 'Military Boarding School' },
  { value: '40', label: 'Boot Camp' },
];
const selectMemberTypeOptions = [
  { value: 'Mutual Referent', label: 'Mutual Referent' },
  { value: 'Referent', label: 'Referent' },
  { value: 'Resource', label: 'Resource' },
  { value: 'Contributor', label: 'Contributor' },
  { value: 'Influencer', label: 'Influencer' },
  { value: 'Friendly', label: 'Friendly' },
  { value: 'Advocate', label: 'Advocate' },
  { value: 'Other', label: 'Other' },
];

const onAddCompany = () => {

}
const onChangeStatus = (e) => {
  // v will be true or false
  console.log('Change Status: '+e.target);
  // alert('Change Status'+ e);
}
export default function MyCompany() {
  return (
    <>
      <SEO title="Add Insurance" />
      <div className="content-wrapper px-4 py-4">
              
      <Card>
          <CardBody>

            <Container>
                <Row>
                  <Col breakPoint={{ xs: 12 }}>
                    <h1 className="text-center mb-5">Add Insurance</h1>
                  </Col>
                </Row>

                <Row className="justify-content-center align-items-center mb-5">
                  <Col className="col-lg-12">
                  <form>
                      <Row>
                        <Col breakPoint={{ xs: 12 }}>
                          <label htmlFor="GradeRes">Type</label>
                          <SelectStyled options={selectTypeOptions}  placeholder="Select" id="GradeRes" name="GradeRes" onChange ={onChangeStatus.bind(this)} />
                        </Col>

                        <Col breakPoint={{ xs: 12 }}>
                          <label htmlFor="MemberType">Member Type</label>
                          <SelectStyled options={selectMemberTypeOptions}  placeholder="Select" id="MemberType" name="MemberType" onChange ={onChangeStatus.bind(this)} />
                        </Col>

                        <Col breakPoint={{ xs: 12 }}>
                            <label htmlFor="CompanyName">Company Name</label>
                            <Input fullWidth size="Medium" className="Name">
                            <input type="text" placeholder="" id="CompanyType" name="CompanyType" onChange ={onChangeStatus.bind(this)}/>
                          </Input>
                        </Col>

                        <Col breakPoint={{ xs: 12 }} breakPoint={{ md: 9 }}></Col>
                        <Col breakPoint={{ xs: 12 }} breakPoint={{ md: 3 }}>
                            <Button status="Success" type="button" shape="SemiRound" onClick={onAddCompany} fullWidth>Save</Button>
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