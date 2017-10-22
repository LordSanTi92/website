import React from 'react';
import ReactDOM from 'react-dom';

let thirdPartImages = ['./images/image13.jpg','./images/image14.jpg','./images/image15.jpg','./images/image16.jpg','./images/image17.jpg','./images/image18.jpg']

class ThirdComponentArchitecture extends React.Component{

  handleClickBigImage = event =>{
    let dataId = $(event.target).attr('data-id');
    let imageURL = $(event.target).css('background-image');
    let bigDiv = $("<div class='bigImagePopUp'></div>");
    let prevDiv = $("<div class='prevButton'></div>");
    let prevButton = $("<p>&lt;</p>")
    let nextDiv = $("<div class='nextButton'></div>");
    let nextButton = $("<p class='next'>&gt;</p>")
    let cross = $("<p class='cross fa fa-times'></p>");
    let bigImage = $(`<div class='bigImage' style=background-image:${imageURL}></div>`);
    let bigImageSection = $('<div class="bigImageSection"></div>');
    prevDiv.append(prevButton);
    nextDiv.append(cross);
    nextDiv.append(nextButton);
    bigDiv.append(prevDiv);
    bigDiv.append(bigImage);
    bigDiv.append(nextDiv);
    bigImageSection.append(bigDiv);
    $('body').prepend(bigImageSection);
    cross.on('click',()=>{
      bigImageSection.remove();
    })
    nextButton.on('click',()=>{
      dataId++;
      if(dataId<thirdPartImages.length){
        bigImage.remove();
        bigDiv.append(bigImage);
        bigImage.css('background-image',`url(${thirdPartImages[dataId]}`)
      }
      else{
        dataId=0;
        bigImage.css('background-image',`url(${thirdPartImages[dataId]}`)
        bigImage.remove();
        bigDiv.append(bigImage);
      }
    })
    bigDiv.swipeleft(()=>{
      dataId++;
      if(dataId<thirdPartImages.length){
        bigImage.remove();
        bigDiv.append(bigImage);
        bigImage.css('background-image',`url(${thirdPartImages[dataId]}`)
      }
      else{
        dataId=0;
        bigImage.css('background-image',`url(${thirdPartImages[dataId]}`)
        bigImage.remove();
        bigDiv.append(bigImage);
      }
    })
    prevButton.on('click',()=>{
      dataId--;
      if(dataId>-1){
        bigImage.remove();
        bigDiv.append(bigImage);
        bigImage.css('background-image',`url(${thirdPartImages[dataId]}`)
      }
      else{
        dataId=thirdPartImages.length-1;
        bigImage.css('background-image',`url(${thirdPartImages[dataId]}`)
        bigImage.remove();
        bigDiv.append(bigImage);
      }
    })
      bigDiv.swiperight(()=>{
        dataId--;
        if(dataId>-1){
          bigImage.remove();
          bigDiv.append(bigImage);
          bigImage.css('background-image',`url(${thirdPartImages[dataId]}`)
        }
        else{
          dataId=thirdPartImages.length-1;
          bigImage.css('background-image',`url(${thirdPartImages[dataId]}`)
          bigImage.remove();
          bigDiv.append(bigImage);
        }
      })
  }

  render(){
    return    <div className="content">
                  {thirdPartImages.map((url, index)=>{
                      return <div onClick={this.handleClickBigImage} data-id={index} key={index} style={{backgroundImage:`url(${url})`}} className="image"></div>
                    })
                  }
                </div>


  }
}


export default ThirdComponentArchitecture