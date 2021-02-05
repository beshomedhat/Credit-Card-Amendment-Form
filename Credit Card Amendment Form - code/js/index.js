
// validateMainData
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
          document.getElementById("errorMainData").innerHTML=colls;
          return false;
      }
  else if(utdNoReq.test(utdNo)==false & utdNo!='')
      {
          $("#errorMainData").css({display:"block"})
          colls ="<p>utd number must be numbers</p>"
          document.getElementById("errorMainData").innerHTML=colls;
          return false;
      }
  else if(dateReq.test(date)==false)
      {
          $("#errorMainData").css({display:"block"})
          colls ="<p>date must be a date like this ddmmyyyy </p>"
          document.getElementById("errorMainData").innerHTML=colls;
          return false;
      }
  else if(custNameReq.test(custName)==false)
  {
      $("#errorMainData").css({display:"block"})
      colls ="<p>custName must be alphabets </p>"
      document.getElementById("errorMainData").innerHTML=colls;
      return false;
  }   
  else
      {
          $("#errorMainData").css({display:"none"});
          return true;
      }

}

// validateCardData
var validateCardData = function(){
  var fourDigitReq = /^[0-9][0-9]{3}$/;
  var cardSerNoReq = /^[0-9]+$/;

  var firstFourCard1=document.querySelector('#firstFourCard1').value
  var lastFourCard1=document.querySelector('#lastFourCard1').value
  var cardSerNo1=document.querySelector('#cardSerNo1').value
  var firstFourCard2=document.querySelector('#firstFourCard2').value
  var lastFourCard2=document.querySelector('#lastFourCard2').value
  var cardSerNo2=document.querySelector('#cardSerNo2').value
  var firstFourCard3=document.querySelector('#firstFourCard3').value
  var lastFourCard3=document.querySelector('#lastFourCard3').value
  var cardSerNo3=document.querySelector('#cardSerNo3').value
  var firstFourCard4=document.querySelector('#firstFourCard4').value
  var lastFourCard4=document.querySelector('#lastFourCard4').value
  var cardSerNo4=document.querySelector('#cardSerNo4').value

  let colls="";
  var count=0;
  if(fourDigitReq.test(firstFourCard1)==true && fourDigitReq.test(lastFourCard1)==true && cardSerNoReq.test(cardSerNo1)==true){
      count+=1
  }
  else{
    document.querySelector('#firstFourCard1').value=''
    document.querySelector('#lastFourCard1').value=''
    document.querySelector('#cardSerNo1').value=''
  }
  if(fourDigitReq.test(firstFourCard2)==true && fourDigitReq.test(lastFourCard2)==true && cardSerNoReq.test(cardSerNo2)==true){
      count+=1
  }
  else{
    document.querySelector('#firstFourCard2').value=''
    document.querySelector('#lastFourCard2').value=''
    document.querySelector('#cardSerNo2').value=''
  }
  if(fourDigitReq.test(firstFourCard3)==true && fourDigitReq.test(lastFourCard3)==true && cardSerNoReq.test(cardSerNo3)==true){
      count+=1
  }
  else{
    document.querySelector('#firstFourCard3').value=''
    document.querySelector('#lastFourCard3').value=''
    document.querySelector('#cardSerNo3').value=''
  }
  if(fourDigitReq.test(firstFourCard4)==true && fourDigitReq.test(lastFourCard4)==true && cardSerNoReq.test(cardSerNo4)==true){
      count+=1
  }
  else{
    document.querySelector('#firstFourCard4').value=''
    document.querySelector('#lastFourCard4').value=''
    document.querySelector('#cardSerNo4').value=''
  }
  if(count>0){
    $("#errorCardDetails").css({display:"none"})
    return true
  }
  else{
    $("#errorCardDetails").css({display:"block"})
    colls =`<p>Enter at least one card details </p> <p> first four & last four -> just 4 digits and  cardSerNo3 is number</p>`
    document.getElementById("errorCardDetails").innerHTML=colls;
    return false;
  }


}


async function fillForm() {
  if(validateMainData() && validateCardData()){
    const { PDFDocument } = PDFLib
    // Fetch the PDF with form fields
    const formUrl = 'https://files.fm/down.php?cf&i=nfr3wx7xv&n=test.pdf'
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())


    // Load a PDF with form fields
    const pdfDoc = await PDFDocument.load(formPdfBytes)


    // Get the form containing all the fields
    const form = pdfDoc.getForm()

    // Get all fields in the PDF by their names
    // -------mainData
    const baseNumber = form.getTextField('baseNo')
    const utdNo = form.getTextField('utdNo')
    const date = form.getTextField('date')
    const custName = form.getTextField('custName')
    // ----------cardData
    const firstFourCard1 = form.getTextField('firstFourCard1')
    const lastFourCard1 = form.getTextField('lastFourCard1')
    const cardSerNo1 = form.getTextField('cardSerNo1')
    const firstFourCard2 = form.getTextField('firstFourCard2')
    const lastFourCard2 = form.getTextField('lastFourCard2')
    const cardSerNo2 = form.getTextField('cardSerNo2')
    const firstFourCard3 = form.getTextField('firstFourCard3')
    const lastFourCard3 = form.getTextField('lastFourCard3')
    const cardSerNo3 = form.getTextField('cardSerNo3')
    const firstFourCard4 = form.getTextField('firstFourCard4')
    const lastFourCard4 = form.getTextField('lastFourCard4')
    const cardSerNo4 = form.getTextField('cardSerNo4')

    //----------------------------------------------------------- 
    // ----------set mainData
    baseNumber.setText(document.querySelector('#baseNumber').value)
    utdNo.setText(document.querySelector('#utdNo').value)
    date.setText(document.querySelector('#date').value)
    custName.setText(document.querySelector('#custName').value)
    // --------------set cardData
    firstFourCard1.setText(document.querySelector('#firstFourCard1').value)
    lastFourCard1.setText(document.querySelector('#lastFourCard1').value)
    cardSerNo1.setText(document.querySelector('#cardSerNo1').value)
    firstFourCard2.setText(document.querySelector('#firstFourCard2').value)
    lastFourCard2.setText(document.querySelector('#lastFourCard2').value)
    cardSerNo2.setText(document.querySelector('#cardSerNo2').value)
    firstFourCard3.setText(document.querySelector('#firstFourCard3').value)
    lastFourCard3.setText(document.querySelector('#lastFourCard3').value)
    cardSerNo3.setText(document.querySelector('#cardSerNo3').value)
    firstFourCard4.setText(document.querySelector('#firstFourCard4').value)
    lastFourCard4.setText(document.querySelector('#lastFourCard4').value)
    cardSerNo4.setText(document.querySelector('#cardSerNo4').value)
    //-----------------------------------------------------------

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save()

    // Trigger the browser to download the PDF document
    download(pdfBytes, "pdf-lib_form_creation_example.pdf", "application/pdf");
  }
}


document.querySelector("#submitBtn").addEventListener('click',function(){
  fillForm()
})

