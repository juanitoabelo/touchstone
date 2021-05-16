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

const searchBy = [
  { value: 'EmailAddress', label: 'Email' },
  { value: 'FirstName', label: 'First Name' },
  { value: 'LastName', label: 'Last Name' },
  { value: 'CompanyName', label: 'Company Name' },
  { value: 'HomePhone', label: 'Home Phone' },
  { value: 'WorkPhone', label: 'WorkPhone' },
  { value: 'CellPhone', label: 'CellPhone' },
];

const searchByCompanyId = [
  { value: '0', label: 'All' },
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
  { value: '17', label: 'Newport Academy' },
  { value: '14', label: 'Palm Shores Behavioral Health Center'},
  { value: '8', label: 'Red Frog'},
  { value: '19', label: 'Second Chances of Southern Utah'},
  { value: '23', label: 'Soulegria'},
  { value: '5', label: 'Therapy Insider'},
  { value: '18', label: 'Visions Teen Center'},
  { value: '11', label: 'Voyage Recovery'},
  { value: '15', label: 'Voyage Recovery Center'},
];

const onSearchLeads = () => {

}

const selStatus = (e) => {
      console.log('Selected button: '+ e.target.value);
}

const onChangeStatus = (e) => {
  // v will be true or false
  console.log('Change Status: '+e.target);
  // alert('Change Status'+ e);
}
export default function SearchClients() {
  return (
    <>
      <SEO title="LEAD ADMIN" />
      <div className="content-wrapper px-4 py-4">

      
      <Card>
          <CardBody>

            <Container>
                <Row>
                  <Col breakPoint={{ xs: 12 }}>
                    <h1 className="text-center mb-5">CLIENT ADMIN</h1>
                  </Col>
                </Row>

                <Row className="justify-content-center align-items-center mb-5">
                  <Col className="col-lg-12">
                  <Card>
                    <CardBody className="p-5">
                      <form>
                          <Row>
                            <Col breakPoint={{ xs: 12 }} breakPoint={{ md: 4 }}>
                              <label htmlFor="CompanyID">Company</label>
                              <SelectStyled options={searchByCompanyId}  placeholder="Select" id="CompanyID" name="CompanyID" onChange ={onChangeStatus.bind(this)} />
                            </Col>
                            <Col breakPoint={{ xs: 12 }} breakPoint={{ md: 4 }}>
                            <label htmlFor="SearchVal">Search For</label>
                              <Input fullWidth size="Medium" className="notes">
                                <input type="text" placeholder="" id="SearchVal" name="SearchVal" onChange ={onChangeStatus.bind(this)}/>
                              </Input>
                            </Col>
                            <Col breakPoint={{ xs: 12 }} breakPoint={{ md: 4 }}>
                              <label htmlFor="SearchBy">Search By</label>
                              <SelectStyled options={searchBy}  placeholder="Select" id="SearchBy" name="SearchBy" onChange ={onChangeStatus.bind(this)} />
                            </Col>
                            <Col breakPoint={{ xs: 12 }} breakPoint={{ md: 6 }}>
                                <Button status="Success" type="button" shape="SemiRound" onClick={onSearchLeads}>View Clients</Button>
                            </Col>
                        </Row>
                              
                      </form> 
                    </CardBody>
                  </Card>
                  </Col>
                </Row>

                <Row className="justify-content-center align-items-center mb-4">
                  <Col breakPoint={{ xs: 12 }} breakPoint={{ md: 12 }}>
                    <h2 className="mb-0">Results</h2>
                  </Col>
                </Row>
              
                <Row className="mb-5">
                  <Col id="main_view">User Leads</Col>
                </Row>

              </Container>

          </CardBody>
        </Card>
        </div>
    </>
  );
}