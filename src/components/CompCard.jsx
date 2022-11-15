import React from "react";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "../App.css";
import "./compcard.css";
import Masha from "../images/masha_comp.jpeg";

const CompCard = () => {
  const printRef = useRef();
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };

  return (
    <div className="comp_card_container">
      <div className="comp_card_main" ref={printRef}>
        <div
          className="comp_card_headshot"
          style={{ backgroundImage: `url(${Masha})` }}
        >
          <span id="image_name_overlay">Masha Surname</span>
        </div>

        <div className="comp_card_info">
          <div className="comp_card_blurb">
            <p>
              "My interest in fashion is both artistic and practical.' I love
              the expressive power of fashion design and the way that creative
              ideas can help people to define and express their roles in the
              world, and I find deep satisfaction in the beauty of fashion
              images and the way they can enhance the human form.' At the same
              time I am very much aware that, without efficient management and
              marketing, the fashion designer's ideas might never reach the
              people for whom they are created, and that anyone who wishes to
              devote his or her career to the industry must learn much about
              business methods and the practical processes of production.' My
              great inspirations are such dynamic women as Coco Chanel and Diane
              von Furstenburg, whose work gave expression to some of the seismic
              social changes of the twentieth century. 'Coco Chanel set women
              free from the constraints of the past.' The casual styles she
              offered were a true reflection of the way women were achieving the
              social freedoms enjoyed traditionally by men.' "
            </p>
          </div>
          <div className="comp_card_measurements">
            <h2>Sedcard/Measurements</h2>
            <br></br>
            <ul>
              <li>Height: 1,68</li>
              <li>Size: 34/36</li>
              <li>Bust: 82</li>
              <li>Waist: 60 </li>
              <li>Hips: 87</li>
              <li>Shoes: 37 </li>
              <li>Hair: blond</li>
              <li>Eyes: blue</li>
            </ul>
          </div>
          <div className="comp_card_contacts">
            <span id="comp_name"> Masha Surname </span>
            <ul id="comp_contact_list">
              <li>https://mashasite.com</li>
              <li>email@emailaddress.com</li>
              <li>@highmashion</li>
            </ul>
          </div>
        </div>
      </div>
      <button type="button" onClick={handleDownloadPdf}>
        Download Sedcard
      </button>
    </div>
  );
};

export default CompCard;
