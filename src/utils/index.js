/**
 * @param fileData 请求得到文件
 * @param fileName 例如：fileName.xlsx
 */
export const downloadFile = (fileData, fileName) => {
    let url = window.URL.createObjectURL(new Blob([fileData]))
    let link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()

    setTimeout(() => {
        document.body.removeChild(link)
    }, 3000)

}
