import { ReportHandler } from 'web-vitals'

const reportWebVitals = async (onPerfEntry?: ReportHandler): Promise<void> => {
  if (!onPerfEntry || typeof onPerfEntry !== 'function') return

  try {
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import(
      'web-vitals'
    )

    await Promise.all([
      getCLS(onPerfEntry),
      getFID(onPerfEntry),
      getFCP(onPerfEntry),
      getLCP(onPerfEntry),
      getTTFB(onPerfEntry),
    ])
  } catch (error) {
    console.error(error)
  }
}

export default reportWebVitals
