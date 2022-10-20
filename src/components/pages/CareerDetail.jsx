import React from "react";
import "./../styles/CareerDetail.css";
import { styled } from "@mui/material/styles";
import { Grid, InputAdornment } from "@mui/material";
import Button from "@mui/material/Button";
import InputTextField from "./../StyledComponent/InputTextField/InputTextField";

const ContactButton = styled(Button)({
    '&': {
        background: '#379cf6',
        color: '#FFF',
        fontWeight: '500',
        padding: '6px 30px',
        borderRadius: "50px",
        border: '2px solid #379cf6',
        marginTop: '10px'
    },
    '&:hover': {
        borderColor: '#379cf6',
        background: "white",
        color: '#379cf6',
        transition: ".7s",
    }
});

const CareerDetail = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="careerDetail_body">
            <div className="careerDetail_item">
              <h3>Front-End Developer</h3>
              <h5 className="description careerDetail_desc">Scan IT</h5>
            </div>
            <div className="career_detail">
              <h4>Job Description</h4>
              <p className="description career_desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, ullam sed. Numquam eos similique repella.Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Tempora, ullam sed.
                Numquam eos similique repella.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tempora, ullam sed. Numquam eos
                similique repella.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Tempora, ullam sed. Numquam eos similique
                repella.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, ullam sed. Numquam eos similique repella.Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Tempora, ullam sed.
                Numquam eos similique repella.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tempora, ullam sed. Numquam eos
                similique repella.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Tempora, ullam sed. Numquam eos similique
                repella.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, ullam sed. Numquam eos similique repella.
              </p>
              <p className="description career_desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, ullam sed. Numquam eos similique repella.Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Tempora, ullam sed.
                Numquam eos similique repella.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tempora, ullam sed. Numquam eos
                similique repella.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Tempora, ullam sed. Numquam eos similique
                repella.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="description career_desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, ullam sed. Numquam eos similique repella.Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Tempora, ullam sed.
                Numquam eos similique repella.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tempora, ullam sed. Numquam eos
                similique repella.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Tempora, ullam sed. Numquam eos similique
                repella.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, ullam sed. Numquam eos similique repella.Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Tempora, ullam sed.
                Numquam eos similique repella.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tempora, ullam sed. Numquam eos
                similique repella.
              </p>
            </div>
            <div className="careerDetail">
              <h1>Career From</h1>
            </div>
            <Grid item xs={12} md={6} sx={{ mt: 10 }}>
              <form>
                <Grid
                  container
                  direction="row"
                  sx={{ mb: "20px" }}
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={{ xs: 3, md: 1.5 }}
                >
                  <Grid item xs={12} md={12}>
                    <InputTextField
                      label="Name"
                      id="custom-css-outlined-input"
                      fullWidth
                      required
                      name="user_name"
                      type="name"
                      sx={{ bgcolor: "white" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                           <i className="ri-user-fill"></i>{" "}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <InputTextField
                      label="Email"
                      id="custom-css-outlined-input"
                      fullWidth
                      required
                      name="user_email"
                      type="email"
                      sx={{ bgcolor: "white" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {" "}
                            <i className="ri-mail-fill"></i>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <InputTextField
                      label="Phone"
                      id="custom-css-outlined-input"
                      fullWidth
                      required
                      type="number"
                      name="phone"
                      sx={{ bgcolor: "white" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <i className="ri-phone-fill"></i>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid  item xs={12} md={12}>
                    <InputTextField
                      label="Position"
                      id="custom-css-outlined-input"
                      fullWidth
                      required
                      name="position"
                      type="text"
                      sx={{ bgcolor: "white" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <i className="ri-profile-line"></i>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid  item xs={12} md={12}>
                    <InputTextField
                      id="custom-css-outlined-input"
                      fullWidth
                      name="file"
                      type="file"
                      required
                      sx={{ bgcolor: "white" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <i class="ri-file-line"></i>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <InputTextField
                      label="Cover Letter"
                      id="custom-css-outlined-input"
                      fullWidth
                      type="text"
                      rows={5}
                      required
                      multiline
                      name="message"
                      sx={{ bgcolor: "white" }}
                    />
                  </Grid>
                </Grid>
                <ContactButton
                  type="submit"
                  sx={{ textTransform: "capitalize", fontSize: "18px" }}
                >
                  Apply Now
                </ContactButton>
              </form>
            </Grid>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerDetail;
