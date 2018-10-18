<template>
  <div class="finance">
    <x-header><a slot="right" @click="goTo()">收益计算器</a>标的详情</x-header>
    <group>
      <div class="p20">YM01-HSBL-2018-2006</div>
      <flexbox>
        <flexbox-item>
          <div class="center f24">10%</div>
          <div class="center">年化收益</div>
        </flexbox-item>
        <flexbox-item>
        </flexbox-item>
        <flexbox-item>
          <div class="center">3个月</div>
          <div class="center">项目期限</div>
        </flexbox-item>
      </flexbox>
      <div class="center">50%</div>
      <box gap="10px">
        <x-progress :percent="data.progress" :show-cancel="false"></x-progress>
      </box>
      <div class="pb10">
        <flexbox>
          <flexbox-item>
            <div class="center">1,000,000.00</div>
            <div class="center">借款金额(元)</div>
          </flexbox-item>
          <flexbox-item>
          </flexbox-item>
          <flexbox-item>
            <div class="center">500,000.00</div>
            <div class="center">剩余可投(元)</div>
          </flexbox-item>
        </flexbox>
      </div>
    </group>
    <group>
      <cell title="服务介绍" is-link></cell>
      <flow>
        <flow-state state="1" is-done>
          <span slot="title">投资 08.16</span>
        </flow-state>
        <flow-line is-done></flow-line>

        <flow-state state="2" is-done>
          <span slot="title">起息 08.17</span>
        </flow-state>
        <flow-line></flow-line>

        <flow-state state="3">
          <span slot="title">到期 2018.08.24</span>

        </flow-state>
        <flow-line></flow-line>

        <flow-state state="4">
          <span slot="title">退出 约1~3天</span>
        </flow-state>
      </flow>
      <div class="p15 f12">
        <div class="f18">收益规则</div>
        <div>现在投资，1天后（含投资当天）开始计息，持有满7天后结束计息，退出后一次还本付息。</div>
      </div>
    </group>
    <group>
      <cell title="红包" value="共3个红包" is-link></cell>
      <tab>
        <tab-item :selected="tab.tabType === 1" @on-item-click="tab.tabType = 1">项目介绍</tab-item>
        <tab-item :selected="tab.tabType === 2" @on-item-click="tab.tabType = 2">企业信息</tab-item>
        <tab-item :selected="tab.tabType === 3" @on-item-click="tab.tabType = 3">出借记录</tab-item>
        <tab-item :selected="tab.tabType === 4" @on-item-click="tab.tabType = 4">风险控制</tab-item>
      </tab>
      <div class="p15">
        <div v-if="tab.tabType === 1">
          <div class="title">产品介绍</div>
          <div>
            核心企业贷是由鱼猫金服推出的供应链金融借贷产品，鱼猫金服挑选资产优秀、商誉良好、背景雄厚的央企、国企、上市公司、新三板企业、
            地方龙头企业作为核心企业开展合作，围绕企业上下游有借款需求的企业进行金融服务。借款企业凭借与核心企业真实的贸易与合作背景，
            向鱼猫金服申请借款，借款到期后，由核心企业与借款企业构成双重还款保障。
          </div>
          <div class="title">还款保障</div>
          <div class="content">
            <div>1、核心企业为借款企业开据电子商业汇票，到期按时兑付款项。</div>
            <div>2、借款企业经营状况良好，拥有稳定的营业收入以偿还借款。《风险提示》</div>
          </div>
          <div class="title">风险提示信息</div>
          <div class="content">
            <div>1、资金损失风险</div>
            <div>
              网络借贷信息中介机构将按照依法、诚信、自愿、公平的原则为出借人和借款人提供信息中介服务，维护出借人与借款人的合法权益。
              但网络借贷信息中介机构不提供增信服务，不承担借贷违约风险。出借人和借款人遵循借贷自愿、诚实守信、责任自负、
              风险自担的原则承担借贷风险，出借人自行承担借贷产品的本息损失。
            </div>
          </div>
          <div class="content">
            <div>2、借款人风险</div>
            <div>
              借款人因经验及能力不足风险、婚姻及家庭不稳定风险、居住不稳定风险、品质及道德风险、健康风险、信用风险、经营风险、股权风险、
              管理不足风险、还款能力不足风险、过度负债风险等原因，未按照合同约定还款，导致出借人的出借本金和利息无法按时回收。
            </div>
          </div>
          <div class="content">
            <div>3、出借人风险</div>
            <div>
              出借人因其出借风险意识、风险识别能力、出借经历、风险承受能力等原因，未能准确了解借贷风险，出借决策产生偏差，致使自身遭受损失。
            </div>
          </div>
          <div class="content">
            <div>4、资金回收风险</div>
            <div>
              针对出借人出借本金或者回款再出借资金，网络借贷信息中介机构会积极协助出借人寻找、推荐借款人，以完成资金出借、获取利息之目的，
              但寻找、推荐借款人日期存在一定不确定性，会导致出借人在出借期限届满后可能无法完全回收出借资金和获得利息。
            </div>
          </div>
          <div class="content">
            <div>5、促成失败的风险</div>
            <div>本次借款的促成需符合相关法律法规的规定和借款合同的约定，可能存在不能满足成立条件从而无法成立的风险。</div>
          </div>
          <div class="content">
            <div>6、市场风险</div>
            <div>网络借贷行业因受经济因素、政治因素等各种因素影响而引起的波动，从而会产生风险。</div>
          </div>
          <div class="content">
            <div>7、其他风险</div>
            <div>包括因政策变化、自然灾害、不可抗力、经济周期因素等产生的税收风险、管理风险、操作风险等。</div>
          </div>
        </div>
        <div v-if="tab.tabType === 2">
          <div>核心企业</div>
          <div>上市公司 高新技术企业 ISO质量体系认证</div>
          <div class="table-box">
            <x-table full-bordered>
              <tbody>
              <tr>
                <td style="width: 60px">企业名称</td>
                <td>深圳*有限公司</td>
              </tr>
              <tr>
                <td>注册资金</td>
                <td>1亿港元</td>
              </tr>
              <tr>
                <td>成立日期</td>
                <td>2002-04-11</td>
              </tr>
              <tr>
                <td>所属行业</td>
                <td>制造业</td>
              </tr>
              <tr>
                <td>总资产</td>
                <td>9亿人民币</td>
              </tr>
              <tr>
                <td>年营业</td>
                <td>9.5亿人民币</td>
              </tr>
              <tr>
                <td>公司简介</td>
                <td class="more-text">
                  上市公司体系内子公司，与世界多家著名企业保持着紧密的战略合作关系，主要包括：华为、海尔、格力、联想等企业，
                  先后通IS09001、IS014000、TS16949等体系认证，获得索尼GP认证，是行业中享誉卓著的五金模具及五金零件生产商。
                </td>
              </tr>
              <tr>
                <td>经营范围</td>
                <td class="more-text">
                  1、电子商业汇票<br>2、真实贸易往来<br>3、上游供应商
                </td>
              </tr>
              </tbody>
            </x-table>
          </div>
          <div>借款人信息</div>
          <div class="table-box">
            <x-table full-bordered>
              <tbody>
              <tr>
                <td style="width: 80px">企业名称</td>
                <td>深圳*有限公司</td>
              </tr>
              <tr>
                <td>注册资金</td>
                <td>500万元</td>
              </tr>
              <tr>
                <td>法定代表人</td>
                <td>李*</td>
              </tr>
              <tr>
                <td>经营期限</td>
                <td>长期</td>
              </tr>
              <tr>
                <td>成立日期</td>
                <td>2007-07-04</td>
              </tr>
              <tr>
                <td>所属行业</td>
                <td>制造业</td>
              </tr>
              <tr>
                <td>公司简介</td>
                <td>产销：精密模具及配件；销售；特殊钢。</td>
              </tr>
              <tr>
                <td>资产情况</td>
                <td>306万元</td>
              </tr>
              <tr>
                <td class="more-text">年收入及负债情况</td>
                <td>243万元</td>
              </tr>
              <tr>
                <td>资金运用情况</td>
                <td>未发现实际资金用途与借款合同不符情况</td>
              </tr>
              <tr>
                <td>经营状况</td>
                <td>企业正常经营，财务状况良好</td>
              </tr>
              <tr>
                <td>还款能力变化</td>
                <td>无</td>
              </tr>
              <tr>
                <td>资产负债情况</td>
                <td class="more-text">该企业资产负债表中数据显示，资产为306万元，负债243万元</td>
              </tr>
              </tbody>
            </x-table>
          </div>
          <div>信用历史</div>
          <div class="table-box">
            <x-table full-bordered>
              <tbody>
              <tr>
                <td>在平台逾期次数</td>
                <td style="width: 120px">0次</td>
              </tr>
              <tr>
                <td>在平台逾期总金额</td>
                <td>0.00元</td>
              </tr>
              <tr>
                <td>在其他网络借款平台借款情况</td>
                <td>无</td>
              </tr>
              <tr>
                <td class="more-text">截至借款前6个月内借款人征信报告中的逾期情况</td>
                <td>无逾期</td>
              </tr>
              <tr>
                <td>涉诉情况</td>
                <td>近期无未结被诉讼记录</td>
              </tr>
              <tr>
                <td>受行政处罚情况</td>
                <td>近期无受行政处罚记录</td>
              </tr>
              </tbody>
            </x-table>
          </div>
        </div>
        <div v-if="tab.tabType === 3">3</div>
        <div v-if="tab.tabType === 4">4</div>
      </div>
    </group>
    <div class="pt20">
      <div class="submit-box">
        <x-button type="primary" link="/lending/confirmInvestment">立即投资</x-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, XHeader, XButton, XProgress, Box, Flexbox, FlexboxItem, Flow, FlowState, FlowLine, Tab, TabItem, XTable } from 'vux'

  export default {
    name: 'FinanceDetail',
    components: {
      Group,
      Cell,
      XHeader,
      XButton,
      XProgress,
      Box,
      Flexbox,
      FlexboxItem,
      Flow,
      FlowState,
      FlowLine,
      Tab,
      TabItem,
      XTable
    },
    data () {
      return {
        data: {},
        tab: {
          tabType: 1
        }
      }
    },
    methods: {
      goTo () {
        this.$router.push({
          name: `calculator`,
          params: {}
        })
      },
      getFrom () {
        var self = this
        self.data = self.$route.params.data || {}
        console.log(self.data)
      },
      init () {
        var self = this
        self.getFrom()
      }
    },
    created () {
      var self = this
      self.init()
    }
  }
</script>

<style>
  .finance .title {
    margin: 10px 0;
    padding: 5px 10px;
    border-left: 3px solid #f00;
  }
  .finance .content {
    padding-bottom: 5px;
  }
</style>
