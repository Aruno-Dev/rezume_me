import React from "react";
import Pdf from "react-to-pdf";


//STYLE
import "./style.css";


const ref = React.createRef();
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      title: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      zip: "",
      educationSchool: "",
      educationDegree: "",
      educationYearOne: "",
      educationYearTwo: "",
      isGraduated: false,
      educationItems: [],
      jobCompany: "",
      jobTitle: "",
      jobYearOne: "",
      jobYearTwo: "",
      jobItems: [],
      educationCount: 0,
      jobCount: 0,
    };
  }
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  handleEducationSubmit = (e) => {
    e.preventDefault();
    this.educationCounterIncrease();
    this.setState({
      educationSchool: "",
      educationDegree: "",
      educationYearOne: "",
      educationYearTwo: "",
      isGraduated: null,
      educationItems: [
        ...this.state.educationItems,
        {
          educationSchool: this.state.educationSchool,
          educationDegree: this.state.educationDegree,
          educationYearOne: this.state.educationYearOne,
          educationYearTwo: this.state.educationYearTwo,
          isGraduated: this.state.isGraduated,
        },
      ],
    });
  };
  deleteEducation = (index) => {
    this.educationCounterDecrease();
    const arr = this.state.educationItems;
    arr.splice(index, 1);
    this.setState({
      educationItems: arr,
    });
  };

  educationCounterIncrease = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        educationCount: prevState.educationCount + 1,
      };
    });
  };

  educationCounterDecrease = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        educationCount: prevState.educationCount - 1,
      };
    });
  };
  educationList = () => {
    return this.state.educationItems.map((educationItem, index) => {
      return (
        <div className="education-card" key={index}>
          <i
            className="fas fa-times"
            onClick={() => this.deleteEducation(index)}
          ></i>
          <div className="education-infos">
            <h4 className="years">
              {educationItem.educationYearOne} -{" "}
              {educationItem.educationYearTwo}
            </h4>

            <h4>{educationItem.educationSchool}</h4>
            <h4>{educationItem.educationDegree}</h4>
            {educationItem.isGraduated ? (
              <h4 className="graduated">obtenu</h4>
            ) : null}
          </div>
        </div>
      );
    });
  };

  handleJobSubmit = (e) => {
    e.preventDefault();
    this.jobCounterIncrease();
    this.setState({
      jobCompany: "",
      jobTitle: "",
      jobYearOne: "",
      jobYearTwo: "",
      jobItems: [
        ...this.state.jobItems,
        {
          jobCompany: this.state.jobCompany,
          jobTitle: this.state.jobTitle,
          jobYearOne: this.state.jobYearOne,
          jobYearTwo: this.state.jobYearTwo,
        },
      ],
    });
  };
  deleteJob = (index) => {
    this.jobCounterDecrease();
    const arr = this.state.jobItems;
    arr.splice(index, 1);
    this.setState({
      jobItems: arr,
    });
  };

  jobCounterIncrease = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        jobCount: prevState.jobCount + 1,
      };
    });
  };

  jobCounterDecrease = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        jobCount: prevState.jobCount - 1,
      };
    });
  };

  jobList = () => {
    return this.state.jobItems.map((jobItem, index) => {
      return (
        <div className="job-card" key={index}>
          <i className="fas fa-times" onClick={() => this.deleteJob(index)}></i>
          <div className="job-infos">
            <h4 className="years">
              {jobItem.jobYearOne} - {jobItem.jobYearTwo}
            </h4>
            <h4>{jobItem.jobCompany}</h4>
            <h4>{jobItem.jobTitle}</h4>
          </div>
        </div>
      );
    });
  };


  render() {
    return (
      <div className="container">
        <div className="leftside">
          <div className="form">
            <form>
              <h3>Vos Informations</h3>
              <div className="form-infos">
                <input
                  type="text"
                  name="firstName"
                  placeholder="prénom"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="nom"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="title"
                  placeholder="titre"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </div>
              <h5>Coordonnées</h5>
              <div className="form-contact">
                <input
                  type="tel"
                  name="phone"
                  placeholder="téléphone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <h5>Adresse</h5>
              <div className="form-address">
                <input
                  type="text"
                  name="address"
                  placeholder="adresse"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="zip"
                  placeholder="code postal"
                  value={this.state.zip}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="ville"
                  value={this.state.city}
                  onChange={this.handleChange}
                />{" "}
              </div>
            </form>

            <form onSubmit={this.handleEducationSubmit}>
              <h5 className="degrees-title">Diplomes/formations</h5>
              <div className="form-degrees">
                <input
                  type="text"
                  name="educationSchool"
                  placeholder="école..."
                  value={this.state.educationSchool}
                  onChange={this.handleChange}
                />

                <input
                  type="text"
                  name="educationDegree"
                  placeholder="diplome"
                  value={this.state.educationDegree}
                  onChange={this.handleChange}
                />

                <input
                  type="text"
                  name="educationYearOne"
                  placeholder="année début"
                  value={this.state.educationYearOne}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="educationYearTwo"
                  placeholder="année fin"
                  value={this.state.educationYearTwo}
                  onChange={this.handleChange}
                />
                <div>
                  <input
                    id="isGraduated"
                    type="checkbox"
                    name="isGraduated"
                    placeholder="obtenu"
                    checked={this.state.isGraduated}
                    onChange={this.handleChange}
                  />
                  <label for="isGraduated">obtenu</label>
                </div>
              </div>
              <button className="degrees-button">ajouter formation</button>
            </form>

            <form onSubmit={this.handleJobSubmit}>
              <h5 className="jobs-title">Expériences professionnelles</h5>
              <div className="form-jobs">
                <input
                  type="text"
                  name="jobCompany"
                  placeholder="entreprise"
                  value={this.state.jobCompany}
                  onChange={this.handleChange}
                />

                <input
                  type="text"
                  name="jobTitle"
                  placeholder="intitulé du poste"
                  value={this.state.jobTitle}
                  onChange={this.handleChange}
                />

                <input
                  type="text"
                  name="jobYearOne"
                  placeholder="année de début"
                  value={this.state.jobYearOne}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="jobYearTwo"
                  placeholder="année de fin"
                  value={this.state.jobYearTwo}
                  onChange={this.handleChange}
                />
              </div>
              <button className="jobs-button">ajouter poste</button>
            </form>
          </div>
        </div>
        <div className="rightside">
          <div id="documentToDownload" className="document" ref={ref}>
            <div className="infos">
              {this.state.firstName ? (
                <h2>
                  {this.state.firstName} {this.state.lastName}{" "}
                </h2>
              ) : null}
              {this.state.title ? <h4>{this.state.title}</h4> : null}
            </div>
            <div className="contact">
              {this.state.phone ? (
                <div>
                  <h5>
                    <span>
                      <i className="fas fa-phone-alt"></i>
                      Tél :
                    </span>
                    {this.state.phone}
                  </h5>
                </div>
              ) : null}
              {this.state.email ? (
                <h5>
                  <span>
                    <i className="fas fa-envelope"></i>
                    Email :
                  </span>
                  {this.state.email}
                </h5>
              ) : null}
            </div>
            <div className="address">
              {this.state.address ? (
                <div>
                  <h5>
                    {" "}
                    <span>adresse : </span>
                    {this.state.address}
                  </h5>

                  {this.state.zip ? (
                    <h5 className="zip">{this.state.zip}</h5>
                  ) : null}
                  {this.state.city ? (
                    <h5 className="city">{this.state.city}</h5>
                  ) : null}
                </div>
              ) : null}
            </div>
            {this.state.educationCount > 0 ? (
              <h3 className="degrees-title">Diplomes / Formations</h3>
            ) : null}
            <div className="education">{this.educationList()}</div>
            {this.state.jobCount > 0 ? (
              <h3 className="job-title">Expériences professionnelles</h3>
            ) : null}
            <div className="job">{this.jobList()}</div>
            <span className="watermark">made with rezume_me.io</span>
          </div>
          <div className="download">
            <Pdf targetRef={ref} filename="rezume_me.pdf">
              {({ toPdf }) => <button onClick={toPdf}>Télécharger Pdf</button>}
            </Pdf>
          </div>
        </div>
      </div>
    );
  }
}
