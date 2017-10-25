import React from 'react';
import stylesheet from 'styles/index.scss';

export default () => (
  <div className="root">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className="app">
      <div className="mainBody">
        <div className="content">
          <div className="left">
            <header>
              <div id="logo">=CHL</div>
              <div className="title">
                <div className="name">曹慧琳</div>
                <div className="position">
                  <i class="iconfont">&#xe60c;</i>前端开发工程师
                </div>
                <div className="location">
                  <i class="iconfont">&#xe600;</i>中国 上海
                </div>
              </div>
            </header>
            <div className="content">
              <section>
                <h2>Profile</h2>
                <p>我毕业于湖南科技大学物联网工程专业，计算机科班出身，上大学的时候喜欢研究算法。15年开始接触前端，16年至今已经有一年半的工作经验。在公司负责多个项目的搭建、开发和维护，并参与公司多个产品的设计。</p>
              </section>
              <section>
                <h2>Experience</h2>
                <ul>
                  <li>
                    <h4>比特币中国</h4>
                    <div className="time">2016.06-至今</div>
                  </li>
                </ul>
              </section>
              <section>
                <h2>Project</h2>
                <ul>
                  <li>
                    <h4>贪吃蛇小游戏</h4>
                  </li>
                  <li>
                    <h4>手机阅读器</h4>
                  </li>
                </ul>
              </section>
              <section>
                <h2>Education</h2>
                <ul className='education'>
                  <h4>湖南科技大学</h4>
                  <div className="time">2013.09-2017.06</div>
                  <div>物联网工程</div>
                </ul>
              </section>
            </div>
          </div>
          <div className="right">
            <section>
              <h2>Details</h2>
              <ul className="details">
                <li>
                  <i class="iconfont">&#xe64a;</i>1995-09
                </li>
                <li>
                  <i class="iconfont">&#xe8c9;</i>chl.2016@qq.com
                </li>
                <li>
                  <i class="iconfont">&#xe601;</i>176 1217 3894
                </li>
                <li>
                  <i class="iconfont">&#xe920;</i>1057275848
                </li>
                <li>
                  <i class="iconfont">&#xeac0;</i>
                  <a href="https://github.com/caohuilin">
                    https://github.com/caohuilin
                  </a>
                </li>
                <li>
                  <i class="iconfont">&#xe60d;</i>
                  <a href="https://hi-hi.cn/chlblogv2">
                    https://hi-hi.cn/chlblogv2
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <h2>Skills</h2>
              <div className="skill-circle">
                <ul className="circle in-circle">
                  <li>webpack</li>
                  <li>gulp</li>
                  <li>git</li>
                  <li>Bootstrap</li>
                </ul>
                <ul className="circle out-circle">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Less</li>
                  <li>ES6</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Immutable</li>
                </ul>
              </div>
            </section>
            <section>
              <h2>Rewards</h2>
              <ul className="rewards">
                <li>
                  <i class="iconfont">&#xe614;</i>
                  <p>明星员工(公司首个获此殊荣的实习生)</p>
                </li>
                <li>
                  <i class="iconfont">&#xe614;</i>
                  <p>国家奖学金</p>
                </li>
                <li>
                  <i class="iconfont">&#xe614;</i>
                  <p>省级优秀毕业生</p>
                </li>
                <li>
                  <i class="iconfont">&#xe614;</i>
                  <p>校优秀学生</p>
                </li>
                <li>
                  <i class="iconfont">&#xe614;</i>
                  <p>蓝桥杯全国软件信息技术专业人才大赛湖南赛区C/C++组二等奖</p>
                </li>
                <li>
                  <i class="iconfont">&#xe614;</i>
                  <p>2015年湖南科技大学程序设计竞赛三等奖/最佳女生奖</p>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className="copyright">
          <p>copyright 2017 @<span>caohuilin</span></p>
          <div className="wechat">
            <i class="iconfont">&#xe62f;</i>
            <div className='wechatPage'>
              <img src="../static/images/wechat.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
