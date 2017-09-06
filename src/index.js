import Confirm from './Confirm'
import './style'

const SingleDOM = (function () {
  let instance
  const SingleDOM = function () {
    if (instance) return instance

    this.init()
    instance = this

    return instance
  }
  SingleDOM.prototype.init = function () {
    const ConfirmDOM = document.createElement('div')
    ConfirmDOM.id = 'lamento-confirm'
    document.body.appendChild(ConfirmDOM)
  }
  return SingleDOM
})()

export default ({
  content = '',
  cancelButtonText = '取消',
  confirmButtonText = '确定'
}) => {
  new SingleDOM()

  const confirm = new Confirm({
    target: document.querySelector('#lamento-confirm'),
    data: {
      content,
      cancelButtonText,
      confirmButtonText
    }
  })

  return new Promise((resolve, reject) => {
    confirm.on('confirm', _ => {
      confirm.onCanel()
      resolve()
    })
  })
}
