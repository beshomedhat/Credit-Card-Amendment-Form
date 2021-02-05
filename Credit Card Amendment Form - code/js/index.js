

const { PDFDocument } = PDFLib

var validateMainData = function(){
  var basNoReq = /^[0-9][0-9]{5}$/;
  var utdNoReq = /^[0-9]+$/;
  // var dateReq = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/;
  var dateReq = /^(0?[1-9]|[12][0-9]|3[01])(0?[1-9]|1[012])\d{4}$/;
  var custNameReq = /^[a-zA-Z ]+$/;

  var baseNumber = document.querySelector('#baseNumber').value
  var utdNo = document.querySelector('#utdNo').value
  var date = document.querySelector('#date').value
  var custName = document.querySelector('#custName').value

  let colls="";
  if(basNoReq.test(baseNumber)==false)
      {
          $("#errorMainData").css({display:"block"})
          colls ="<p>base number must be numbers (6 digits) </p>"
          document.getElementById("error").innerHTML=colls;
          return false;
      }
  else if(utdNoReq.test(utdNo)==false & utdNo!='')
      {
          $("#errorMainData").css({display:"block"})
          colls ="<p>utd number must be numbers</p>"
          document.getElementById("error").innerHTML=colls;
          return false;
      }
  else if(dateReq.test(date)==false)
      {
          $("#errorMainData").css({display:"block"})
          colls ="<p>date must be a date like this ddmmyyyy </p>"
          document.getElementById("error").innerHTML=colls;
          return false;
      }
  else if(custNameReq.test(custName)==false)
  {
      $("#errorMainData").css({display:"block"})
      colls ="<p>custName must be alphabets </p>"
      document.getElementById("error").innerHTML=colls;
      return false;
  }   
  else
      {
          $("#errorMainData").css({display:"none"});
          return true;
      }

}

    async function fillForm() {
    	if(validateMainData()){
        // Fetch the PDF with form fields
      const formUrl = 'https://files.fm/down.php?cf&i=nfr3wx7xv&n=test.pdf'
      const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())


      // Load a PDF with form fields
      const pdfDoc = await PDFDocument.load(formPdfBytes)


      // Get the form containing all the fields
      const form = pdfDoc.getForm()

      // Get all fields in the PDF by their names
      const baseNumber = form.getTextField('baseNo')
      const utdNo = form.getTextField('utdNo')
      const date = form.getTextField('date')
      const custName = form.getTextField('custName')
            
      baseNumber.setText(document.querySelector('#baseNumber').value)
      utdNo.setText(document.querySelector('#utdNo').value)
      date.setText(document.querySelector('#date').value)
      custName.setText(document.querySelector('#custName').value)

      // Serialize the PDFDocument to bytes (a Uint8Array)
      const pdfBytes = await pdfDoc.save()

			// Trigger the browser to download the PDF document
      download(pdfBytes, "pdf-lib_form_creation_example.pdf", "application/pdf");
      }
    }


document.querySelector("#submitBtn").addEventListener('click',function(){
  fillForm()
})

