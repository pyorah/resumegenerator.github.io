const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib

    async function modifyPdf() {
    // Fetch an existing PDF document
    const url = 'lite.pdf'
        const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes)

    // Embed the Helvetica font
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

    // Get the first page of the document
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]

    var A = document.getElementById("A");
    var B = document.getElementById("B");
    var C = document.getElementById("C");
    var D = document.getElementById("D");
    var vertical = document.getElementById("vertical");
    var birthday = document.getElementById("birthday").valueAsNumber;
    var birthday = new Date(birthday);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var vertical = ["Only Enjoy", "Frontend", "Backend","UI/UX", "Fullstack", "App dev", "Game dev", "Business Management", "Public Relations"]

    // Get the width and height of thne first page
    const { width, height } = firstPage.getSize()
    console.log(width, height)
    firstPage.drawText(A.value, {
        x: 302,
        y: 710,
        size: 12.2,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    })
    firstPage.drawText(B.value, {
        x: 302,
        y: 688,
        size: 12.2,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    })
    firstPage.drawText(C.value, {
        x: 302,
        y: 667,
        size: 12.2,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    })
    firstPage.drawText(vertical.value, {
        x: 302,
        y: 647,
        size: 12.2,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    })
    firstPage.drawText(D.value, {
        x: 302,
        y: 627,
        size: 12.2,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    })
    firstPage.drawText(birthday.getDate().toString()+'-'+months[birthday.getMonth()]+'-'+(birthday.getYear()-100+2000).toString(), {
        x: 302,
        y: 587,
        size: 12.2,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    })

    const pdfBytes = await pdfDoc.save()
    download(pdfBytes, ID.value+'.pdf', 'application/pdf');
    }
