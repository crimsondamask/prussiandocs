---
sidebar_position: 1
---

# Getting Started

This is a quick guide that shows you how to use **PrussianStudio**.

## Requirements

**PrussianStudio** is a data acquisition software that is meant to be used in an automated industrial system where you usually have 
a **PLC** with which you can communicate over **Modbus** or **OPC**. So, the first thing that we need is a running **PLC**.


###  Communication

The preferred way to communicate with the **PLC** is with TCP. Just connect the computer to the PLC with an Ethernet cable.
You can also connect to the PLC over serial, but you will need an RS485 to USB adapter.

## Starting PrussianStudio

Once everything is connected, we can start the software.

PrussianStudio consists of 3 major components:

**Nano**: Nano is the software we use to communicate with the PLC over Modbus.

**Server**: PrussianStudio is based on a server that runs in the background and connects everything together.

**HMI**: The HMI is an application that can either run natively or on the browser. It's what we use to monitor and control our process.

First off, start the server by running its executable. Once it starts, we can continue.


