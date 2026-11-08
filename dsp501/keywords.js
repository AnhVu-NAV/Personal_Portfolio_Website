// Each list follows the topic order in its chapter.
window.DSP_ENGLISH_KEYWORDS = {
  1: [
    "digital signal processing, analog-to-digital conversion, ADC, DAC",
    "signal classification, continuous time, discrete time, deterministic signal, random signal",
    "continuous-time sinusoid, amplitude, phase, fundamental period",
    "uniform sampling, sampling frequency, sampling rate, sampling interval",
    "normalized frequency, angular frequency, cycles per sample, radians per sample, samples per cycle",
    "discrete-time periodicity, fundamental period, rational frequency",
    "aliasing, Nyquist frequency, folding frequency",
    "sampling theorem, Nyquist rate, sinc interpolation, signal reconstruction",
    "quantization error, quantization step, bit depth, encoding",
    "quantization noise, SQNR, zero-order hold, DAC",
    "Euler's formula, complex exponential, harmonic"
  ],
  2: [
    "unit impulse, unit step, time shifting, time reversal, downsampling",
    "periodic sequence, even and odd signals, energy signal, power signal",
    "linearity, time invariance, causality, memoryless system, stability",
    "unit impulse decomposition, impulse response, convolution sum, linear convolution",
    "cascade connection, parallel connection, step response",
    "causality, BIBO stability, finite impulse response, infinite impulse response",
    "difference equation, block diagram, unit delay",
    "zero-input response, zero-state response, initial conditions",
    "recursive implementation, nonrecursive implementation, feedforward, feedback",
    "cross-correlation, autocorrelation, time delay estimation"
  ],
  3: [
    "z-transform, region of convergence, ROC",
    "right-sided sequence, left-sided sequence, two-sided sequence, region of convergence",
    "z-transform properties, time shifting, scaling, convolution property",
    "poles and zeros, pole-zero plot, transfer function",
    "inverse z-transform, partial fraction expansion, power series expansion",
    "causal system, stable system, unit circle, pole locations",
    "transient response, steady-state response, repeated poles",
    "pole-zero cancellation, second-order stability",
    "one-sided z-transform, unilateral z-transform, initial conditions",
    "initial value theorem, final value theorem"
  ],
  4: [
    "continuous-time Fourier series, CTFS, Fourier coefficients",
    "continuous-time Fourier transform, CTFT, inverse Fourier transform",
    "discrete-time Fourier series, DTFS, periodic sequence",
    "discrete-time Fourier transform, DTFT, aperiodic signal",
    "line spectrum, harmonics, power spectrum",
    "magnitude spectrum, phase spectrum, conjugate symmetry",
    "DTFT properties, frequency shifting, modulation, convolution theorem",
    "Parseval's theorem, energy spectral density, power spectral density",
    "time-bandwidth product, time duration, spectral width",
    "bandwidth, bandlimited signal, lowpass, bandpass"
  ],
  5: [
    "eigenfunction, complex exponential, frequency response",
    "output spectrum, spectral shaping, LTI filtering",
    "pole-zero geometry, unit circle, magnitude response",
    "phase response, phase delay, group delay",
    "autocorrelation, power spectral density, PSD, stationary input",
    "ideal filter, frequency-selective filter, passband, stopband",
    "moving-average filter, first difference, comb filter",
    "digital resonator, notch filter, oscillator",
    "all-pass filter, minimum-phase system, inverse filtering",
    "system identification, deconvolution"
  ],
  6: [
    "impulse sampling, spectral replicas, aliasing",
    "sampling theorem, Nyquist rate, sinc interpolation, ideal reconstruction",
    "discrete-time processing of continuous-time signals, anti-aliasing filter",
    "analog-to-digital converter, quantization, pulse-code modulation, PCM",
    "digital-to-analog converter, zero-order hold, anti-imaging filter",
    "bandpass sampling, undersampling, bandpass aliasing",
    "analytic signal, Hilbert transform, complex baseband",
    "sampling rate conversion, resampling, interpolation, decimation",
    "differential pulse-code modulation, DPCM, delta modulation",
    "oversampling, sigma-delta modulation, delta-sigma, noise shaping"
  ],
  7: [
    "discrete Fourier transform, DFT, IDFT, frequency sampling",
    "frequency-domain sampling, time-domain aliasing, periodic summation",
    "frequency bin, DC, conjugate symmetry, frequency spacing",
    "circular time shift, modulation property, Parseval",
    "circular convolution, linear convolution, zero padding",
    "block convolution, overlap-save, overlap-add, fast convolution",
    "spectral leakage, windowing, frequency resolution, Hann window",
    "discrete cosine transform, DCT, energy compaction"
  ],
  8: [
    "twiddle factor, divide and conquer, computational complexity",
    "radix-2 FFT, decimation in time, DIT, butterfly",
    "radix-2 FFT, decimation in frequency, DIF, butterfly",
    "bit reversal, radix-4, split-radix FFT",
    "inverse FFT, IFFT, real-input FFT",
    "FFT filtering, fast convolution, FFT correlation",
    "Goertzel algorithm, single-bin DFT",
    "chirp-z transform, CZT, numerical error"
  ],
  9: [
    "difference equation, signal flow graph, block diagram",
    "direct-form FIR, folded FIR, linear-phase structure",
    "cascade FIR, frequency-sampling structure",
    "direct form I, direct form II, transposed direct form",
    "cascade IIR, parallel IIR, second-order sections, biquad",
    "lattice structure, lattice-ladder structure",
    "fixed point, floating point, finite word length",
    "coefficient quantization, pole sensitivity",
    "roundoff noise, limit cycle, overflow oscillation"
  ],
  10: [
    "filter specifications, passband ripple, stopband attenuation, transition bandwidth",
    "linear-phase FIR, symmetric impulse response, antisymmetric impulse response",
    "window method, FIR filter design, Hamming window, Kaiser window",
    "frequency-sampling method, FIR design",
    "Chebyshev approximation, equiripple FIR, Parks-McClellan, Remez exchange",
    "IIR filter design, impulse invariance, backward difference",
    "bilinear transform, frequency warping, prewarping",
    "analog filter prototype, Butterworth, Chebyshev, elliptic filter",
    "lowpass prototype, frequency transformation, highpass, bandstop"
  ],
  11: [
    "downsampling, decimation, anti-aliasing filter",
    "upsampling, zero insertion, interpolation, anti-imaging filter",
    "rational sampling rate conversion, rational resampling",
    "arbitrary sample rate conversion, fractional delay, Farrow structure",
    "polyphase decomposition, noble identities",
    "multistage decimation, multistage interpolation, half-band filter",
    "cascaded integrator-comb, CIC filter",
    "bandpass sampling rate conversion, spectral inversion",
    "filter bank, quadrature mirror filter, QMF, perfect reconstruction"
  ],
  12: [
    "wide-sense stationarity, WSS, autocorrelation, power spectral density",
    "innovation process, autoregressive model, moving-average model, ARMA",
    "forward prediction, backward prediction, orthogonality principle",
    "Yule-Walker equations, normal equations",
    "Levinson-Durbin recursion, reflection coefficient, lattice predictor",
    "AR lattice, ARMA lattice-ladder",
    "parametric spectral estimation, whitening filter, prediction error",
    "FIR Wiener filter, Wiener-Hopf equations, MMSE",
    "causal Wiener filter, noncausal Wiener filter, spectral factorization"
  ],
  13: [
    "adaptive filter, desired signal, error signal",
    "system identification, adaptive noise cancellation, echo cancellation, channel equalization",
    "adaptive line enhancement, ALE, predictive coding",
    "gradient descent, least mean squares, LMS",
    "step size, LMS convergence, misadjustment, excess mean-square error",
    "normalized LMS, NLMS",
    "recursive least squares, RLS, forgetting factor",
    "square-root RLS, lattice RLS, fast transversal filter",
    "multichannel adaptive filtering, beamforming"
  ],
  14: [
    "uniform distribution, mean, variance",
    "cumulative distribution function, CDF, inverse transform sampling",
    "Gaussian noise, normal distribution, Box-Muller transform"
  ],
  15: [
    "frequency grid, frequency sampling, half-bin shift",
    "transition coefficients, minimax criterion, stopband ripple",
    "FIR transition coefficient table, linear-phase filter design"
  ]
};
