# Environmental Audio Capture: Calibration Guide

---

## 1. Acoustic Boundary Constraints
To achieve high-fidelity phoneme saturation matching Calyx parameters, ensure target recording spaces satisfy the following room profiling attributes:
- **Maximum Noise Floor**: -55.0 dB (measured A-weighted).
- **Target RT60 Decay**: 150 ms to 220 ms. Avoid spaces with flutter echoes.
- **Background Hum (HVAC)**: Attenuate active ventilation below 30 dBA.

---

## 2. Hardware Signal Configuration
- **Transducer Type**: Large-diaphragm condenser or premium directional vocal microphone.
- **Pre-amplifier Gain Calibration**: Peak input level must not exceed -6.0 dBFS to prevent digital clipping.
- **Analog-to-Digital Sampling**: Raw 24-bit PCM at 48.0 kHz minimum (uncompressed WAV).
- **Placement Axis**: 15-degree off-axis microphone placement at a distance of 15-20 cm from the speaker's mouth to prevent pop plosives.
