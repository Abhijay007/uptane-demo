---
id: uptane-design
title: Uptane Design
sidebar_label: Uptane Design
---

![Uptane Process](assets/images/Uptane_process.png)

Uptane utilizes multiple servers, known as repositories, to provide security through the validation of images before downloading. This diagram illustrates how the checks and balances of this system work. The connected components on the right-hand side of the diagram are on the vehicle, while the components on the left-hand side represent the repositories. The Image repository can be thought of as an unchanging source of information about images. It is the keeper of every image currently deployed by the OEM, along with the metadata files that prove their authenticity. The Director repository knows what software should be distributed to each ECU, given the current state of the repository. Many ECUs do not have clocks and may use an external source to provide a secure source of time.

## Update Process

In the first step of the update process, the ECU sends its vehicle version manifest to the Director repository. The manifest contains signed information about existing images. Using this input, the Director chooses which images should be installed next. The metadata and images are then moved to the ECU, which will run a verification process. The diagram shows a Primary ECU connected to a number of Secondary ECUs. ECUs are generally classified in terms of access to storage space, memory, a power supply, and a direct internet connection. The form of verification that will be run—Full or Partial—is based on the resources of the ECU, as well as its security criticality. If the verification indicates no issues, the images can be downloaded to the ECU, and the vehicle version manifest will be updated.

## The Evolution of Uptane

To meet the types of threats enumerated, Uptane started with the basic design of [The Update Framework (TUF)](https://theupdateframework.github.io/overview.html), a flexible framework and specification that has proven successful in securing software update systems on repositories. The basic TUF design was first introduced in a [2010 paper](https://ssl.engineering.nyu.edu/papers/samuel_tuf_ccs_2010.pdf) by Justin Samuel, Nick Mathewson, Roger Dingledine, and Justin Cappos. Under the direction of Cappos at NYU Tandon School of Engineering since 2011, TUF has been adapted to protect against threats to various types of software applications.

A central tenet of TUF is **compromise-resilience**, or the ability to minimize the extent of the threat posed by any given attack. The building blocks for this state rest on four design principles:

1. **Separation of trust**: distributing responsibility for the signing of metadata so that if one signing key is compromised, it will not affect other users.
2. **Threshold signatures**: requiring that a fixed number of signatures must be gathered to attest to the authenticity of a file before the update can be downloaded.
3. **Explicit and implicit revocation of keys**: providing a mechanism for replacing compromised keys so malevolent parties cannot continue signing metadata to authenticate malware.
4. **Keeping the most vulnerable keys offline**: mandating that certain signing keys be kept offline, thus making them harder to steal or compromise.

However, researchers realized that they could not directly apply TUF to ECUs. Securing ECUs on vehicles poses challenges due to their inconsistent capabilities and other factors that distinguish them from computers or smart devices:

* They are not single clients.
* They are not particularly smart.
* The individual components do not trust each other.

With these issues in mind, as well as concerns expressed by industry representatives, Uptane modified the basic TUF design in a few ways. The first modification is the addition of a second repository, which divides labor and responsibility for different aspects of the verification process. The *image* repository holds an accurate inventory of all the images currently on all ECUs on all vehicles maintained by an OEM, along with the corresponding metadata. This repository uses offline keys to sign all metadata, making it much harder for attackers to substitute compromised images. The *director* repository instructs vehicles on what updates should be installed next and uses online keys to sign its metadata, allowing for easier and faster turnarounds. By combining the two repositories, an OEM can provide both customizability and security for the control units on their vehicles.

Another modification made to the basic TUF design is how Uptane verifies the images, which are the media used to supply the code and data that control the actions of the ECUs. In the verification step, the ECU determines if a file is safe to download by checking its accompanying metadata. An ECU can use two different verification strategies depending on its power: *full* verification and *partial* verification. Full verification requires checking that the hashes and sizes of images in the signed metadata match the hashes and sizes stored on the image repository. Partial verification requires only the signature on the targets metadata file from the director repository to be checked.

Full verification provides better protection for ECUs with sufficient memory and storage capacity. However, even the weakest ECUs can benefit from the less resource-intensive partial method, improving the overall security of the system.
