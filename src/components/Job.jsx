const Job = (props) => {
  console.log(props);
  
  return (
    <>
      {/* <div className={props.className}> */}
        <div className={{props.className} "job-box"} >
          <p class="title-job">{props.title}</p>
          <p>
            {props.contractType} - {props.country} - {props.city}
          </p>
        </div>
      {/* </div> */}
    </>
  );
};
export default Job;
