import Image from "next/image"

export default function card() {
    return(
        <div className="container-fluid">
            <div className="row">
                
              <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/หมูผัด.png" layout="responsive" className="card-img-top" width={100} height={150} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">Card title</h5>
                 <p className="card-text">The Most Secret content!</p>
                 <a href="#" className="btn btn-primary">Get in dawg!</a>
                </div>
              </div>
            </div>

                <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/ติ่มซำ.png" layout="responsive" className="card-img-top" width={100} height={150} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">Card title</h5>
                 <p className="card-text">The Most Secret content!</p>
                 <a href="#" className="btn btn-primary">Get in dawg!</a>
                </div>
            </div>
                </div>

                <div className="col-md-4">
                <div className="card">
                 <Image src="/assets/img/หม้อไฟ.png" layout="responsive" className="card-img-top" width={100} height={150} alt="Let's Go!" />
                 <div className="card-body">
                 <h5 className="card-title">Card title</h5>
                 <p className="card-text">The Most Secret content!</p>
                 <a href="#" className="btn btn-primary">Get in dawg!</a>
                </div>
            </div>
                </div>

            </div>
        </div>
    )
}
